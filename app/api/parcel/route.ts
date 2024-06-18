import ResponseBuilder, {
  BuildPaginatedResponse,
} from "../../_utils/responseBuilder";
import prisma from "@prismaorm/client";
import {
  Branch,
  Parcel,
  ParcelStatus,
  Prisma,
} from "@prismaorm/generated/client";
import { z } from "zod";
import qs from "qs";

const createSchema = z.object({
  recipientName: z.string(),
  recipientAddress: z.string(),
  status: z.nativeEnum(ParcelStatus),
  longitude: z.number(),
  latitude: z.number(),
  courierId: z.string(),
  branchId: z.string(),
});

const withSchema = z.enum(["branch"]);
export type QueryWithGetParcelsData = z.infer<typeof withSchema>;

export const queryStatusesGetParcels = z
  .array(z.nativeEnum(ParcelStatus))
  .or(z.nativeEnum(ParcelStatus))
  .optional();

export type QueryStatusesGetParcels = z.infer<typeof queryStatusesGetParcels>;

export type GetParcelsResponseDoc = Parcel & {
  branch?: Branch;
};

export type GetParcelsResponse = BuildPaginatedResponse<GetParcelsResponseDoc>;

const querySchema = z.object({
  pageSize: z.coerce.number().optional(),
  pageIndex: z.coerce.number().optional(),
  search: z.string().optional(),
  courierId: z.string().optional(),
  branchId: z.string().optional(),
  statuses: queryStatusesGetParcels,
  with: z.array(withSchema).or(withSchema).optional(),
  sort: z.enum(["-createdAt", "createdAt"]).optional(),
});

export type CreateBody = z.infer<typeof createSchema>;

export async function GET(req: Request) {
  // validate query
  const searchParams = qs.parse(req.url.split("?")[1]);
  const validQuery = querySchema.safeParse(searchParams);
  if (!validQuery.success) {
    return ResponseBuilder.build({
      status: 400,
      error: {
        id: "bad-request",
        message: "Invalid query",
        detail: validQuery.error.flatten(),
      },
    });
  }

  const pageSize = validQuery.data.pageSize ?? 10;
  const pageIndex = validQuery.data.pageIndex ?? 0;
  const search = validQuery.data.search;
  const courierId = validQuery.data.courierId;
  const branchId = validQuery.data.branchId;
  const statuses = Array.isArray(validQuery.data.statuses)
    ? validQuery.data.statuses
    : validQuery.data.statuses
    ? [validQuery.data.statuses]
    : [];
  const withQuery = Array.isArray(validQuery.data.with)
    ? validQuery.data.with
    : [validQuery.data.with];

  // where query
  const whereInput: Prisma.ParcelWhereInput = {};
  if (courierId) {
    whereInput.courierId = courierId;
  }
  if (branchId) {
    whereInput.branchId = branchId;
  }
  if (search) {
    whereInput.OR = [
      {
        recipientName: {
          contains: search,
          mode: "insensitive",
        },
      },
    ];
  }
  if (statuses.length) {
    whereInput.status = {
      in: statuses,
    };
  }

  // relations query
  const withRelations: Prisma.ParcelInclude = {};
  if (withQuery.includes("branch")) {
    withRelations.branch = true;
  }

  const totalDocs = await prisma.parcel.count({
    where: whereInput,
  });
  const totalPages = Math.ceil(totalDocs / pageSize);

  const findManyProps: Prisma.ParcelFindManyArgs = {
    skip: pageSize * Number(pageIndex),
    take: pageSize,
    where: whereInput,
    include: withRelations,
    orderBy: {
      ...(!validQuery.data.sort && { createdAt: "desc" }),
      ...(validQuery.data.sort === "-createdAt" && { createdAt: "desc" }),
      ...(validQuery.data.sort === "createdAt" && { createdAt: "asc" }),
    },
  };

  const parcels = await prisma.parcel.findMany(findManyProps);

  return ResponseBuilder.buildPaginated({
    status: 200,
    docs: parcels,
    totalPages,
    totalDocs,
    pageSize,
    pageIndex,
  });
}

export async function POST(req: Request) {
  const body = await req.json();

  const valid = createSchema.safeParse(body);

  if (!valid.success) {
    return ResponseBuilder.build({
      status: 400,
      error: {
        id: "invalid-body",
        message: "The body is invalid",
        detail: valid.error.flatten(),
      },
    });
  }

  const parcel = await prisma.parcel.create({
    data: {
      recipientName: valid.data.recipientName,
      recipientAddress: valid.data.recipientAddress,
      status: valid.data.status ?? "ON_THE_WAY",
      longitude: valid.data.longitude,
      latitude: valid.data.latitude,
      courierId: valid.data.courierId,
      branchId: valid.data.branchId,
    },
    select: {
      id: true,
    },
  });

  return ResponseBuilder.build({
    status: 200,
    data: {
      doc: parcel,
    },
  });
}
