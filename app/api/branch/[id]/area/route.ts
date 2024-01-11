import ResponseBuilder from "@/_utils/responseBuilder";
import prisma from "@prismaorm/client";
import { type NextRequest } from "next/server";
import { z } from "zod";

const postBranchAreasSchema = z.object({
  area: z.array(
    z.object({
      longitude: z.number(),
      latitude: z.number(),
    })
  ),
});

export type PostBranchAreasBody = z.infer<typeof postBranchAreasSchema>;

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await req.json();

  const validBody = postBranchAreasSchema.safeParse(body);

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

  const deleteAreas = prisma.area.deleteMany({
    where: {
      branchId: params.id,
    },
  });

  const insertAreas = prisma.area.createMany({
    data: [
      ...validBody.data.area.map((area) => ({
        branchId: params.id,
        longitude: area.longitude,
        latitude: area.latitude,
      })),
    ],
  });

  const [, insertedAreas] = await prisma.$transaction([
    deleteAreas,
    insertAreas,
  ]);

  return ResponseBuilder.build({
    status: 200,
    data: {
      docs: insertedAreas,
    },
  });
}
