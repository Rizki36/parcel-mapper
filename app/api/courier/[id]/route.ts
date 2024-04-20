import ResponseBuilder from "../../../_utils/responseBuilder";
import prisma from "@prismaorm/client";
import { Branch, Courier, Prisma, User } from "@prismaorm/generated/client";
import { type NextRequest } from "next/server";
import { z } from "zod";
import qs from "qs";

export const withSchema = z.enum(["branch", "user"]);
export type QueryWithGetOneCourierData = z.infer<typeof withSchema>;

const querySchema = z.object({
  with: z.array(withSchema).optional().or(withSchema),
});

const updateSchema = z.object({
  name: z.string().optional(),
  branchId: z.string().optional().nullable(),
});
export type UpdateCourierBody = z.infer<typeof updateSchema>;

export type GetOneCourierData = Courier & {
  branch?: Branch | null; // with branch
  user?: User | null; // with user
};

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
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

  // with relations
  const withQuery = Array.isArray(validQuery.data.with)
    ? validQuery.data.with
    : [validQuery.data.with];
  let withRelations: Prisma.CourierInclude = {};
  if (withQuery.includes("branch")) withRelations.branch = true;
  if (withQuery.includes("user")) withRelations.user = true;

  const courier: GetOneCourierData | null = await prisma.courier.findFirst({
    where: {
      id: params.id,
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

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  prisma.$transaction(async (tx) => {
    const courier = await tx.courier.findFirst({
      where: {
        id: params.id,
      },
      select: {
        userId: true,
      },
    });

    // delete user if exists
    if (courier?.userId) {
      await tx.user.delete({
        where: {
          id: courier?.userId,
        },
      });
    }

    await tx.courier.delete({
      where: {
        id: params.id,
      },
    });
  });

  return ResponseBuilder.build({
    status: 200,
  });
}
