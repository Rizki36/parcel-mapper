import ResponseBuilder from "../../../_utils/responseBuilder";
import prisma from "@prismaorm/client";
import { Branch, Courier, Prisma } from "@prismaorm/generated/client";
import { type NextRequest } from "next/server";
import { z } from "zod";

const withSchema = z.enum(["branch"]);

const paramsSchema = z.object({
  id: z.string(),
});

const querySchema = z.object({
  with: withSchema.optional(),
});

const updateSchema = z.object({
  name: z.string().optional(),
  branchId: z.string().optional().nullable(),
});
export type UpdateCourierBody = z.infer<typeof updateSchema>;

export type GetOneCourierData = Courier & {
  branch?: Branch | null; // with branch
};

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const validParams = paramsSchema.safeParse(params);

  if (!validParams.success) {
    return ResponseBuilder.build({
      status: 400,
      error: {
        id: "bad-request",
        message: "Invalid params",
        detail: validParams.error.flatten(),
      },
    });
  }

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

  let withRelations: Prisma.CourierInclude = {};

  if (validQuery.data.with === "branch") withRelations.branch = true;

  const courier: GetOneCourierData | null = await prisma.courier.findFirst({
    where: {
      id: validParams.data.id,
    },
    include: withRelations,
  });

  return ResponseBuilder.build({
    status: 200,
    data: {
      doc: courier,
    },
  });
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await req.json();

  const validBody = updateSchema.safeParse(body);

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
  const courier = await prisma.courier.update({
    where: {
      id: params.id,
    },
    data: {
      ...(validBody.data.name !== "undefined" && {
        name: validBody.data.name,
      }),
      ...(validBody.data.branchId !== "undefined" && {
        branchId: validBody.data.branchId,
      }),
    },
  });

  return ResponseBuilder.build({
    status: 200,
    data: {
      doc: courier,
    },
  });
}
