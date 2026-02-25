import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("access_token")?.value;
  const pathname = request.nextUrl.pathname;

  // If user is at /tasks without token, redirect to home
  if (pathname.startsWith("/tasks") && !token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // If user is at auth pages WITH token, redirect to /tasks
  if ((pathname === "/login" || pathname === "/register") && token) {
    return NextResponse.redirect(new URL("/tasks", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/tasks/:path*", "/login", "/register"],
};
