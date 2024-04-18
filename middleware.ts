import { verifyJwtToken } from "@/login/libs";
import { NextRequest, NextResponse } from "next/server";

const adminRoutes = ["/admin"];
const courierRoutes = ["/courier"];
const authRoutes = ["/login"];

const isAuthPages = (url: string) => {
  const prefix = url.split("/")[1];
  return authRoutes.some((page) => page.startsWith(`/${prefix}`));
};
const isAdminPages = (url: string) => {
  const prefix = url.split("/")[1];
  return adminRoutes.some((page) => page.startsWith(`/${prefix}`));
};
const isCourierPages = (url: string) => {
  const prefix = url.split("/")[1];
  return courierRoutes.some((page) => page.startsWith(`/${prefix}`));
};

export default async function middleware(request: NextRequest) {
  const { url, nextUrl, cookies } = request;
  const { value: token } = cookies.get("token") ?? { value: null };
  const hasVerifiedToken = token && (await verifyJwtToken(token));

  const authPage = isAuthPages(nextUrl.pathname);
  const adminPage = isAdminPages(nextUrl.pathname);
  const courierPage = isCourierPages(nextUrl.pathname);

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

  if (adminPage) {
    // courier accessing admin page
    if (hasVerifiedToken.role === "courier") {
      return NextResponse.redirect(new URL(`/courier`, url));
    }
  }

  if (courierPage) {
    // admin accessing courier page
    if (["admin", "super-admin"].includes(hasVerifiedToken.role)) {
      return NextResponse.redirect(new URL(`/admin`, url));
    }
  }

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: [
    "/admin/:path*",
    "/courier/:path*",
    "/((?!api|_next/static|_next/image|.*\\.png$).*)",
  ],
};
