"use client";
import React from "react";
import cookies from "js-cookie";
import { JWTPayload, verifyJwtToken } from "../libs";

export function useAuth() {
  const [auth, setAuth] = React.useState<JWTPayload | null>(null);

  const getVerifiedtoken = async () => {
    const token = cookies.get("token") ?? null;
    const verifiedToken = await verifyJwtToken(token ?? "");
    setAuth(verifiedToken);
  };
  React.useEffect(() => {
    getVerifiedtoken();
  }, []);
  return auth;
}
