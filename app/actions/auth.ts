import prisma from "@prismaorm/client";
import { z } from "zod";
import bcrypt from "bcrypt";
import { createSession } from "./session";

const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export async function loginAction(state: LoginFormState, formData: FormData) {
  // Validate form fields
  const validatedFields = loginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Extract validated fields
  const { email, password } = validatedFields.data;

  // Find user by email
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  // If user not found, return early
  if (!user) {
    return {
      message: "User not found",
    };
  }

  // Compare password
  const passwordMatch = await bcrypt.compare(password, user.password);

  // If password doesn't match, return early
  if (!passwordMatch) {
    return {
      message: "Password doesn't match",
    };
  }

  // set session
  await createSession(user.id);

  return undefined;
}

export type LoginFormState =
  | {
      errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;
