import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("accesstoken");
  const pathname = req.nextUrl.pathname;

  if (token) {
    if (pathname === "/") {
      return NextResponse.redirect(new URL("/quizes", req.url));
    }
    return NextResponse.next();
  }

 
  if (pathname.startsWith("/quizes")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/quizes/:path*"], 
};
