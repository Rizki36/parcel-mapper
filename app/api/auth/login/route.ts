import { z } from "zod";
import ResponseBuilder from "../../../_utils/responseBuilder";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@prismaorm/client";
import bycrypt from "bcrypt";
import { SignJWT } from "jose";
import { JWTPayload, getJwtSecretKey } from "@/login/libs";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export async function POST(req: NextRequest) {
  const body = await req.json();

  const validBody = loginSchema.safeParse(body);

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

  const data =
    validBody.data.email === process.env.SUPER_ADMIN_EMAIL
      ? await loginSuperAdmin(validBody.data)
      : await loginAdminOrCourier(validBody.data);

  if (data instanceof NextResponse) {
    return data;
  }

  const token = await new SignJWT(data)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(getJwtSecretKey());

  const response = NextResponse.json(data, {
    status: 200,
    headers: { "content-type": "application/json" },
  });

  response.cookies.set({
    name: "token",
    value: token,
    path: "/",
  });

  return response;
}

const loginAdminOrCourier = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<JWTPayload | NextResponse> => {
  const user = await prisma.user.findFirst({
    where: {
      email,
    },
    select: {
      password: true,
      role: true,
      courier: {
        select: {
          id: true,
          branchId: true,
        },
      },
      branchAdmin: {
        select: {
          branchId: true,
        },
      },
    },
  });

  if (!user) {
    return ResponseBuilder.build({
      status: 401,
      error: {
        id: "unauthorized",
        message: "Email or password doesn't match",
      },
    });
  }

  const passwordMatch = await bycrypt.compare(password, user.password);

  if (!passwordMatch) {
    return ResponseBuilder.build({
      status: 401,
      error: {
        id: "unauthorized",
        message: "Email or password doesn't match",
      },
    });
  }

  const branchId =
    user.role === "COURIER"
      ? user.courier?.branchId
      : user.branchAdmin?.branchId;

  const courierId = user.role === "COURIER" ? user.courier?.id : null;

  return {
    email,
    branchId: branchId ?? null,
    courierId: courierId ?? null,
    role: user.role === "COURIER" ? "courier" : "admin",
  };
};

const loginSuperAdmin = ({
  email,
  password,
}: {
  email: string;
  password: string;
}): JWTPayload | NextResponse => {
  if (process.env.SUPER_ADMIN_PASSWORD !== password) {
    return ResponseBuilder.build({
      status: 401,
      error: {
        id: "unauthorized",
        message: "Email or password doesn't match",
      },
    });
  }

  return { email, branchId: null, courierId: null, role: "super-admin" };
};
