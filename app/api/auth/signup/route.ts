import ResponseBuilder from "../../../_utils/responseBuilder";
import prisma from "@prismaorm/client";
import bcrypt from "bcrypt";
import { z } from "zod";

const signupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export async function POST(req: Request) {
  const body = await req.json();

  const valid = signupSchema.safeParse(body);

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

  const { email, password } = valid.data;

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (user) {
    return ResponseBuilder.build({
      status: 400,
      error: {
        id: "email-exists",
        message: "A user with this email already exists",
      },
    });
  }

  const encryptedPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.user.create({
    data: {
      role: "USER",
      email,
      password: encryptedPassword,
    },
    select: {
      id: true,
      role: true,
      name: true,
      email: true,
    },
  });

  return ResponseBuilder.build({
    status: 200,
    data: {
      doc: newUser,
    },
  });
}
