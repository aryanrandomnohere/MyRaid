import { AppError } from "@/lib/utils/errors";

export function buildErrorResponse(error: unknown) {
  if (error instanceof AppError) {
    const payload: Record<string, unknown> = {
      error: {
        code: error.code,
        message: error.message,
      },
    };

    if (error.details) {
      (payload.error as Record<string, unknown>).details = error.details;
    }

    return { payload, status: error.status };
  }

  return {
    payload: {
      error: {
        code: "internal_error",
        message: "Internal server error",
      },
    },
    status: 500,
  };
}
