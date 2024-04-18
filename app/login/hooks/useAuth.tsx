"use client";
import cookies from "js-cookie";
import { verifyJwtToken } from "../libs";
import { useQuery } from "@tanstack/react-query";

export function useAuth() {
  const getVerifiedToken = async () => {
    const token = cookies.get("token") ?? null;
    const verifiedToken = await verifyJwtToken(token ?? "");
    return verifiedToken ?? null;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["auth"],
    queryFn: getVerifiedToken,
  });

  return {
    data,
    loading: isLoading,
  };
}
