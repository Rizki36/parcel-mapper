import ResponseBuilder from "@/_utils/responseBuilder";
import prisma from "@prismaorm/client";
import { Branch, Parcel } from "@prismaorm/generated/client";

export type MappingResponseData = {
  parcels: Parcel[];
  branches: Branch[];
};

export async function GET() {
  const parcels = await prisma.parcel.findMany();
  const branches = await prisma.branch.findMany();

  const data: MappingResponseData = {
    parcels,
    branches,
  };

  return ResponseBuilder.build({
    status: 200,
    data,
  });
}
