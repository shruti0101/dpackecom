// middleware.js
import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl.clone();
  const pathname = req.nextUrl.pathname;

  // protect any /studio route
  if (pathname.startsWith("/studio")) {
    const adminAuth = req.cookies.get("admin-auth")?.value;
    if (adminAuth !== "true") {
      url.pathname = "/login";
      url.search = `from=${encodeURIComponent(pathname)}`;
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/studio/:path*"],
};
