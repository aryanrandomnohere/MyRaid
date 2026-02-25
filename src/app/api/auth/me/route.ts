import { NextResponse } from "next/server";
import { requireAuth } from "@/lib/auth";
import { AppError } from "@/lib/utils/errors";

export async function GET() {
  try {
    const user = await requireAuth();
    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    if (error instanceof AppError) {
      return NextResponse.json(
        {
          error: {
            code: error.code,
            message: error.message,
            ...(error.details && { details: error.details }),
          },
        },
        { status: error.status },
      );
    }

    return NextResponse.json(
      {
        error: {
          code: "internal_error",
          message: "Internal server error",
        },
      },
      { status: 500 },
    );
  }
}
