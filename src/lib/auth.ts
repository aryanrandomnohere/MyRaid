import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { AppError } from "./utils/errors";

export type AuthPayload = {
  id: string;
  email: string;
};

const getJwtSecret = () => {
  if (!process.env.JWT_SECRET) {
    throw new AppError(500, "JWT secret not configured", "config_error");
  }
  return process.env.JWT_SECRET;
};

export const signToken = (payload: AuthPayload) => {
  const secret = getJwtSecret();
  const expiresIn = process.env.JWT_EXPIRES_IN || "1h";
  return jwt.sign(payload, secret, { expiresIn });
};

export const getAuth = async (): Promise<AuthPayload | null> => {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("access_token")?.value;
    if (!token) {
      return null;
    }

    const payload = jwt.verify(token, getJwtSecret()) as AuthPayload;
    return payload;
  } catch {
    return null;
  }
};

export const requireAuth = async (): Promise<AuthPayload> => {
  const auth = await getAuth();
  if (!auth) {
    throw new AppError(401, "Unauthorized", "unauthorized");
  }
  return auth;
};

export const getCookieOptions = () => {
  const isProd = process.env.NODE_ENV === "production";
  const secure =
    (process.env.COOKIE_SECURE || (isProd ? "true" : "false")) === "true";
  return {
    httpOnly: true,
    secure,
    sameSite: "lax" as const,
    maxAge: 1000 * 60 * 60, // 1 hour
  };
};
