import ResponseBuilder from "../../_utils/responseBuilder";
import prisma from "@prismaorm/client";
import { ParcelStatus, Prisma } from "@prismaorm/generated/client";
import { z } from "zod";

const createSchema = z.object({
  recipientName: z.string(),
  recipientAddress: z.string(),
  status: z.nativeEnum(ParcelStatus).nullable(),
  longitude: z.number().nullable(),
  latitude: z.number().nullable(),
  courierId: z.string().nullable(),
});

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const pageSize = Number(searchParams.get("pageSize") ?? "10");
  const pageIndex = Number(searchParams.get("pageIndex") ?? "0");
  const search = searchParams.get("search") ?? "";
  const statuses = searchParams.getAll("statuses") ?? [];

  let whereInput: Prisma.ParcelWhereInput = {};

  if (search) {
    whereInput = {
      OR: [
        {
          recipientName: {
            contains: search,
            mode: "insensitive",
          },
        },
      ],
    };
  }
  if (statuses.length) {
    whereInput = {
      ...whereInput,
      status: {
        in: statuses as ParcelStatus[],
      },
    };
  }

  const totalDocs = await prisma.parcel.count({
    where: whereInput,
  });
  const totalPages = Math.ceil(totalDocs / pageSize);

  const findManyProps: Prisma.ParcelFindManyArgs = {
    skip: pageSize * Number(pageIndex),
    take: pageSize,
    where: whereInput,
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

  const newUser = await prisma.parcel.create({
    data: {
      recipientName: valid.data.recipientName,
      recipientAddress: valid.data.recipientAddress,
      status: valid.data.status ?? "PENDING",
      longitude: valid.data.longitude,
      latitude: valid.data.latitude,
      courierId: valid.data.courierId,
    },
    select: {
      id: true,
    },
  });

  return ResponseBuilder.build({
    status: 200,
    data: {
      doc: newUser,
    },
  });
}
