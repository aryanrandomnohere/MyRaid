import type { ZodType } from "zod";
import { AppError } from "./errors";

export const parseBody = <T>(schema: ZodType<T>, payload: unknown): T => {
  const result = schema.safeParse(payload);
  if (!result.success) {
    throw new AppError(
      400,
      "Validation error",
      "validation_error",
      result.error.flatten(),
    );
  }
  return result.data;
};
