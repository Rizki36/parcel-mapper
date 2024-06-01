import ResponseBuilder, {
  BuildResponse,
} from "../../../_utils/responseBuilder";
import prisma from "@prismaorm/client";
import { Courier, Parcel, Prisma } from "@prismaorm/generated/client";
import { type NextRequest } from "next/server";
import { z } from "zod";

export type GetOneParcelResponse = BuildResponse<{
  doc: Parcel & {
    courier?: Courier;
  };
}>;

const withSchema = z.enum(["courier"]);

const querySchema = z.object({
  with: withSchema.optional(),
});

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

  let withRelations: Prisma.ParcelInclude = {};

  if (validQuery.data.with === "courier") withRelations.courier = true;

  const parcel = await prisma.parcel.findFirst({
    where: {
      id: params.id,
    },
    include: withRelations,
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
  const body = await req.json();

  const validBody = z
    .object({
      status: z.enum(["DELIVERED", "CANCELLED"]).optional(),
      recipientName: z.string().optional(),
      recipientAddress: z.string().optional(),
      longitude: z.number().optional(),
      latitude: z.number().optional(),
      courierId: z.string().optional(),
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

  //   remove fields that have undefined values
  const parcel = await prisma.parcel.update({
    where: {
      id: params.id,
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
      ...(validBody.data.courierId && {
        courierId: validBody.data.courierId,
      }),
      ...(validBody.data.branchId && {
        branchId: validBody.data.branchId,
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

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  await prisma.parcel.delete({
    where: {
      id: params.id,
    },
  });

  return ResponseBuilder.build({
    status: 200,
    data: null,
  });
}
