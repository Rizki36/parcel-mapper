import ResponseBuilder from "../../../_utils/responseBuilder";
import prisma from "@prismaorm/client";
import { Area, Branch, Prisma } from "@prismaorm/generated/client";
import { type NextRequest } from "next/server";
import { z } from "zod";

const withSchema = z.enum(["area"]);

const querySchema = z.object({
  with: withSchema.optional(),
});

export type GetOneBranchData = Branch & {
  area?: Area[]; // with area
};

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { searchParams } = new URL(req.url);
  const validQuery = querySchema.safeParse(Object.fromEntries(searchParams));

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

  let withRelations: Prisma.BranchInclude = {};

  if (validQuery.data.with === "area") withRelations.area = true;

  const branch: GetOneBranchData | null = await prisma.branch.findFirst({
    where: {
      id: params.id,
    },
    include: withRelations,
  });

  return ResponseBuilder.build({
    status: 200,
    data: {
      doc: branch,
    },
  });
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await req.json();

  const validBody = z
    .object({
      name: z.string().optional(),
      longitude: z.number().optional(),
      latitude: z.number().optional(),
      branchCode: z.string().optional(),
    })
    .safeParse(body);

  if (!validBody.success) {
    return ResponseBuilder.build({
      status: 400,
      error: {
        id: "bad-request",
        message: "Invalid body",
        detail: validBody.error.flatten(),
      },
    });
  }

  // remove fields that have undefined values
  const branch = await prisma.branch.update({
    where: {
      id: params.id,
    },
    data: {
      ...(validBody.data.latitude && { latitude: validBody.data.latitude }),
      ...(validBody.data.longitude && { longitude: validBody.data.longitude }),
      ...(validBody.data.name && {
        name: validBody.data.name,
      }),
      ...(validBody.data.branchCode && {
        branchCode: validBody.data.branchCode,
      }),
    },
  });

  return ResponseBuilder.build({
    status: 200,
    data: {
      doc: branch,
    },
  });
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await prisma.branch.delete({
    where: {
      id: params.id,
    },
  });

  return ResponseBuilder.build({
    status: 200,
  });
}
