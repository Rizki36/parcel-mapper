import ResponseBuilder from "../../_utils/responseBuilder";
import prisma from "@prismaorm/client";
import { Prisma } from "@prismaorm/generated/client";
import { z } from "zod";
import bycrypt from "bcrypt";

const withSchema = z.enum(["branch"]);

const getAllQuerySchema = z.object({
  pageSize: z.coerce.number().optional(),
  pageIndex: z.coerce.number().optional(),
  with: withSchema.optional(),
  search: z.string().optional(),
  branchId: z.string().optional(),
});

const createSchema = z.object({
  name: z.string(),
  branchId: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
});

export type CrateCourierBody = z.infer<typeof createSchema>;

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const validQuery = getAllQuerySchema.safeParse(
    Object.fromEntries(searchParams)
  );

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

  let whereInput: Prisma.CourierWhereInput = {};

  if (search) {
    whereInput = {
      OR: [
        {
          name: {
            contains: search,
            mode: "insensitive",
          },
        },
      ],
    };
  }
  if (validQuery.data.branchId) whereInput.branchId = validQuery.data.branchId;

  const totalDocs = await prisma.courier.count({
    where: whereInput,
  });
  const totalPages = Math.ceil(totalDocs / pageSize);

  let withRelations: Prisma.CourierInclude = {};

  if (validQuery.data.with === "branch") withRelations.branch = true;

  const couriers = await prisma.courier.findMany({
    skip: pageSize * pageIndex,
    take: pageSize,
    where: whereInput,
    include: withRelations,
  });

  return ResponseBuilder.buildPaginated({
    status: 200,
    docs: couriers,
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

  const { courier } = await prisma.$transaction(async (tx) => {
    const encryptedPassword = bycrypt.hashSync(valid.data.password, 10);

    const user = await tx.user.create({
      data: {
        email: valid.data.email,
        password: encryptedPassword,
        role: "COURIER",
      },
    });

    const courier = await tx.courier.create({
      data: {
        name: valid.data.name,
        branchId: valid.data.branchId,
        userId: user.id,
      },
    });

    return { user, courier };
  });

  return ResponseBuilder.build({
    status: 200,
    data: {
      doc: courier,
    },
  });
}
