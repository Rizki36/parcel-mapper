import ResponseBuilder, { BuildResponse } from "@/_utils/responseBuilder";
import prisma from "@prismaorm/client";
import { NextRequest } from "next/server";
import qs from "qs";
import { z } from "zod";

const querySchema = z.object({
  branchId: z.string().optional(),
});

export type AdminHomePageStatData = {
  courierCount: number;
  branchCount: number;
  parcelCount: number;
};

export type GetAdminHomePageStatResponse = BuildResponse<{
  doc: AdminHomePageStatData;
}>;

export async function GET(req: NextRequest) {
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

  const parcels = await prisma.parcel.count({
    where: {
      status: {
        notIn: ["DELIVERED"],
      },
      ...(validQuery.data.branchId && {
        branchId: validQuery.data.branchId,
      }),
    },
  });
  const branches = await prisma.branch.count({
    where: {
      ...(validQuery.data.branchId && {
        id: validQuery.data.branchId,
      }),
    },
  });
  const couriers = await prisma.courier.count({
    where: {
      ...(validQuery.data.branchId && {
        branchId: validQuery.data.branchId,
      }),
    },
  });

  const doc: AdminHomePageStatData = {
    courierCount: couriers,
    branchCount: branches,
    parcelCount: parcels,
  };

  return ResponseBuilder.build({
    status: 200,
    data: {
      doc: doc,
    },
  });
}
