import ResponseBuilder from "../../_utils/responseBuilder";
import prisma from "@prismaorm/client";
import { Prisma } from "@prismaorm/generated/client";
import { z } from "zod";

const createSchema = z.object({
  name: z.string(),
  branchCode: z.string(),
});

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const pageSize = Number(searchParams.get("pageSize") ?? "10");
  const pageIndex = Number(searchParams.get("pageIndex") ?? "0");
  const search = searchParams.get("search") ?? "";

  let whereInput: Prisma.BranchWhereInput = {};

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

  const totalDocs = await prisma.branch.count({
    where: whereInput,
  });
  const totalPages = Math.ceil(totalDocs / pageSize);

  const findManyProps: Prisma.BranchFindManyArgs = {
    skip: pageSize * Number(pageIndex),
    take: pageSize,
    where: whereInput,
  };

  const branches = await prisma.branch.findMany(findManyProps);

  return ResponseBuilder.buildPaginated({
    status: 200,
    docs: branches,
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

  const newBranch = await prisma.branch.create({
    data: {
      name: valid.data.name,
      branchCode: valid.data.branchCode,
    },
    select: {
      id: true,
    },
  });

  return ResponseBuilder.build({
    status: 200,
    data: {
      doc: newBranch,
    },
  });
}
