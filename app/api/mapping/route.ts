import ResponseBuilder from "@/_utils/responseBuilder";
import prisma from "@prismaorm/client";
import { Area, Branch, Parcel } from "@prismaorm/generated/client";

export type MappingResponseData = {
  parcels: Parcel[];
  branches: (Branch & { area: Area[] })[];
};

export async function GET() {
  const parcels = await prisma.parcel.findMany();
  const branches = await prisma.branch.findMany({
    include: {
      area: true,
    },
  });

  const data: MappingResponseData = {
    parcels,
    branches,
  };

  return ResponseBuilder.build({
    status: 200,
    data,
  });
}
