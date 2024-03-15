import ResponseBuilder from "../../_utils/responseBuilder";
import prisma from "@prismaorm/client";
import { Prisma } from "@prismaorm/generated/client";
import { z } from "zod";

const createSchema = z.object({
  name: z.string(),
  branchId: z.string(),
});

export type CrateBranchBody = z.infer<typeof createSchema>;

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const pageSize = Number(searchParams.get("pageSize") ?? "10");
  const pageIndex = Number(searchParams.get("pageIndex") ?? "0");
  const search = searchParams.get("search") ?? "";
  const withQuery = searchParams.getAll("with");
  const branchId = searchParams.get("branchId");

  let whereInput: Prisma.BranchAdminWhereInput = {};

  if (branchId) {
    whereInput.branchId = branchId;
  }

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

  let include: Prisma.BranchAdminInclude = {};

  if (withQuery.includes("branch")) {
    include.branch = true;
  }

  const totalDocs = await prisma.branchAdmin.count({
    where: whereInput,
  });
  const totalPages = Math.ceil(totalDocs / pageSize);

  const findManyProps: Prisma.BranchAdminFindManyArgs = {
    skip: pageSize * Number(pageIndex),
    take: pageSize,
    where: whereInput,
    include,
  };

  const branchAdmins = await prisma.branchAdmin.findMany(findManyProps);

  return ResponseBuilder.buildPaginated({
    status: 200,
    docs: branchAdmins,
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

  const newBranchAdmin = await prisma.branchAdmin.create({
    data: {
      name: valid.data.name,
      branchId: valid.data.branchId,
    },
    select: {
      id: true,
    },
  });

  return ResponseBuilder.build({
    status: 200,
    data: {
      doc: newBranchAdmin,
    },
  });
}
