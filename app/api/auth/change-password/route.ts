import ResponseBuilder from "@/_utils/responseBuilder";
import prisma from "@prismaorm/client";
import { z } from "zod";
import bcrypt from "bcrypt";

const changePasswordSchema = z.object({
  userId: z.string(),
  password: z.string().min(6),
});

export type ChangePasswordBody = z.infer<typeof changePasswordSchema>;

export async function POST(req: Request) {
  const body = await req.json();

  const valid = changePasswordSchema.safeParse(body);

  if (!valid.success) {
    return ResponseBuilder.build({
      status: 400,
      error: {
        id: "invalid-body",
        message: "The body is invalid",
        detail: valid.error.flatten(),
      },
    });
  }

  const encryptedPassword = await bcrypt.hash(valid.data.password, 10);

  const user = await prisma.user.update({
    data: {
      password: encryptedPassword,
    },
    where: {
      id: valid.data.userId,
    },
    select: {
      id: true,
      name: true,
    },
  });

  return ResponseBuilder.build({
    status: 200,
    data: {
      doc: user,
    },
  });
}
