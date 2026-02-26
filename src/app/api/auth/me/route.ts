import { NextResponse } from "next/server";
import { requireAuth } from "@/lib/auth";
import { AppError } from "@/lib/utils/errors";
import { buildErrorResponse } from "@/app/api/error-handler";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const user = await requireAuth();
    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    const { payload, status } = buildErrorResponse(error);
    return NextResponse.json(payload, { status });
  }
}
