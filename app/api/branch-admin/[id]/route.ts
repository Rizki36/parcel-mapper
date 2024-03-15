import ResponseBuilder from "../../../_utils/responseBuilder";
import prisma from "@prismaorm/client";
import { type NextRequest } from "next/server";
import { z } from "zod";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await req.json();

  const validBody = z
    .object({
      name: z.string().optional(),
      branchId: z.string().optional(),
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
  const branchAdmin = await prisma.branchAdmin.update({
    where: {
      id: params.id,
    },
    data: {
      ...(validBody.data.name && {
        name: validBody.data.name,
      }),
      ...(validBody.data.branchId && {
        branchId: validBody.data.branchId,
      }),
    },
  });

  return ResponseBuilder.build({
    status: 200,
    data: {
      doc: branchAdmin,
    },
  });
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await prisma.branchAdmin.delete({
    where: {
      id: params.id,
    },
  });

  return ResponseBuilder.build({
    status: 200,
  });
}
