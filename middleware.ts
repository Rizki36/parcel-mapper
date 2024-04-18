import { verifyJwtToken } from "@/login/libs";
import { NextRequest, NextResponse } from "next/server";

export const protectedRoutes = ["/admin"];
export const authRoutes = ["/login"];

const isAuthPages = (url: string) =>
  authRoutes.some((page) => page.startsWith(url));

export default async function middleware(request: NextRequest) {
  const { url, nextUrl, cookies } = request;
  const { value: token } = cookies.get("token") ?? { value: null };
  const hasVerifiedToken = token && (await verifyJwtToken(token));

  const authPage = isAuthPages(nextUrl.pathname);

  if (authPage) {
    if (!hasVerifiedToken) {
      const response = NextResponse.next();
      response.cookies.delete("token");
      return response;
    }

    const response = NextResponse.redirect(new URL(`/admin`, url));
    return response;
  }

  if (!hasVerifiedToken) {
    const searchParams = new URLSearchParams(nextUrl.searchParams);
    searchParams.set("next", nextUrl.pathname);
    const response = NextResponse.redirect(
      new URL(`/login?${searchParams}`, url)
    );
    response.cookies.delete("token");
    return response;
  }

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ["/admin/:path*", "/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
