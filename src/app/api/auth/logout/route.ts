import { NextResponse } from "next/server";
import { getCookieOptions } from "@/lib/auth";

export async function POST() {
  const response = NextResponse.json({ status: "ok" });
  const options = getCookieOptions();
  response.cookies.set("access_token", "", { ...options, maxAge: 0 });
  return response;
}
