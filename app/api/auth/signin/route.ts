import ResponseBuilder from "../../../_utils/responseBuilder";
import prisma from "@prismaorm/client";

export async function POST() {
  // TODO: Implement this route
  const users = await prisma.user.findMany();

  return ResponseBuilder.build({
    status: 200,
    data: {
      docs: users,
    },
  });
}
