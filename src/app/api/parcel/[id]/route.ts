import ResponseBuilder from "@/app/_utils/responseBuilder";
import prisma from "@prismaorm/client";
import { type NextRequest } from "next/server";
import { z } from "zod";

const getSchema = z.object({
  id: z.string(),
});

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const valid = getSchema.safeParse(params);

  if (!valid.success) {
    return ResponseBuilder.build({
      status: 400,
      error: {
        id: "bad-request",
        message: "Id is required",
        detail: valid.error.flatten(),
      },
    });
  }

  const parcel = await prisma.parcel.findFirst({
    where: {
      id: valid.data.id,
    },
  });

  return ResponseBuilder.build({
    status: 200,
    data: {
      doc: parcel,
    },
  });
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const valid = getSchema.safeParse(params);

  if (!valid.success) {
    return ResponseBuilder.build({
      status: 400,
      error: {
        id: "bad-request",
        message: "Id is required",
        detail: valid.error.flatten(),
      },
    });
  }

  const body = await req.json();

  const validBody = z
    .object({
      status: z.enum(["PENDING", "DELIVERED", "CANCELLED"]).optional(),
      recipientName: z.string().optional(),
      recipientAddress: z.string().optional(),
      longitude: z.number().optional(),
      latitude: z.number().optional(),
      courierId: z.string().optional(),
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

  //   remove fields that have undefined values
  const parcel = await prisma.parcel.update({
    where: {
      id: valid.data.id,
    },
    data: {
      ...(validBody.data.latitude && { latitude: validBody.data.latitude }),
      ...(validBody.data.longitude && { longitude: validBody.data.longitude }),
      ...(validBody.data.recipientName && {
        recipientName: validBody.data.recipientName,
      }),
      ...(validBody.data.recipientAddress && {
        recipientAddress: validBody.data.recipientAddress,
      }),
    },
  });

  return ResponseBuilder.build({
    status: 200,
    data: {
      doc: parcel,
    },
  });
}
