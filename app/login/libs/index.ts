import { JWTPayload as _JWTPayload, jwtVerify } from "jose";

export type JWTPayload = _JWTPayload & {
  email: string;
  role: "admin" | "super-admin" | "courier";
};

export function getJwtSecretKey() {
  const secret = process.env.NEXT_PUBLIC_JWT_SECRET_KEY;
  if (!secret) {
    throw new Error("JWT Secret key is not matched");
  }
  return new TextEncoder().encode(secret);
}

export async function verifyJwtToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, getJwtSecretKey());
    return payload as JWTPayload;
  } catch (error) {
    return null;
  }
}
