import ResponseBuilder, { BuildResponse } from "@/_utils/responseBuilder";
import prisma from "@prismaorm/client";
import { ParcelStatus } from "@prismaorm/generated/client";
import { NextRequest } from "next/server";
import qs from "qs";
import { z } from "zod";

const querySchema = z.object({
  courierId: z.string().optional(),
});

export type CourierHomePageStatData = {
  status: ParcelStatus;
  count: number;
};

export type GetCourierHomePageStatResponse = BuildResponse<{
  docs: CourierHomePageStatData[];
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

  const parcels = await prisma.parcel.groupBy({
    by: ["status"],
    _count: {
      _all: true,
    },
    where: {
      courierId: validQuery.data.courierId,
    },
  });
  const docs: CourierHomePageStatData[] = parcels.map((parcel) => {
    return {
      status: parcel.status,
      count: parcel._count._all,
    };
  });

  return ResponseBuilder.build({
    status: 200,
    data: {
      docs: docs,
    },
  });
}
