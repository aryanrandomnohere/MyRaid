import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { z } from "zod";
import prisma from "@/lib/db/prisma";
import { AppError } from "@/lib/utils/errors";
import { parseBody } from "@/lib/utils/validation";
import { signToken, getCookieOptions } from "@/lib/auth";
import { buildErrorResponse } from "@/app/api/error-handler";

const authSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = parseBody(authSchema, body);

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      throw new AppError(409, "Email already registered", "email_in_use");
    }

    const passwordHash = await bcrypt.hash(password, 12);
    const user = await prisma.user.create({ data: { email, passwordHash } });
    const token = signToken({ id: user.id, email: user.email });

    const response = NextResponse.json(
      { user: { id: user.id, email: user.email } },
      { status: 201 },
    );

    const options = getCookieOptions();
    response.cookies.set("access_token", token, options);

    return response;
  } catch (error) {
    const { payload, status } = buildErrorResponse(error);
    return NextResponse.json(payload, { status });
  }
}
