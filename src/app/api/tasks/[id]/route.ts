import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/lib/db/prisma";
import { requireAuth } from "@/lib/auth";
import { AppError } from "@/lib/utils/errors";
import { parseBody } from "@/lib/utils/validation";
import { decryptText, encryptText } from "@/lib/utils/crypto";
import { buildErrorResponse } from "@/app/api/error-handler";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const statusSchema = z.enum(["todo", "in_progress", "done"]);

const updateTaskSchema = z
  .object({
    title: z.string().min(1).max(120).optional(),
    description: z.string().max(2000).optional(),
    status: statusSchema.optional(),
  })
  .refine((data) => Object.keys(data).length > 0, {
    message: "Provide at least one field to update",
  });

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const user = await requireAuth();

    const task = await prisma.task.findFirst({
      where: { id: params.id, userId: user.id },
    });

    if (!task) {
      throw new AppError(404, "Task not found", "not_found");
    }

    return NextResponse.json(
      {
        task: {
          id: task.id,
          title: task.title,
          description: decryptText(
            task.descriptionEnc,
            task.descriptionIv,
            task.descriptionTag,
          ),
          status: task.status,
          createdAt: task.createdAt,
        },
      },
      { status: 200 },
    );
  } catch (error) {
    const { payload, status } = buildErrorResponse(error);
    return NextResponse.json(payload, { status });
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const user = await requireAuth();
    const body = await request.json();
    const update = parseBody(updateTaskSchema, body);

    const existing = await prisma.task.findFirst({
      where: { id: params.id, userId: user.id },
    });

    if (!existing) {
      throw new AppError(404, "Task not found", "not_found");
    }

    const data: Record<string, unknown> = {};

    if (update.title !== undefined) {
      data.title = update.title;
    }

    if (update.status !== undefined) {
      data.status = update.status;
    }

    if (update.description !== undefined) {
      const encrypted = encryptText(update.description);
      data.descriptionEnc = encrypted.cipherText;
      data.descriptionIv = encrypted.iv;
      data.descriptionTag = encrypted.tag;
    }

    const task = await prisma.task.update({
      where: { id: existing.id },
      data,
    });

    return NextResponse.json(
      {
        task: {
          id: task.id,
          title: task.title,
          description: decryptText(
            task.descriptionEnc,
            task.descriptionIv,
            task.descriptionTag,
          ),
          status: task.status,
          createdAt: task.createdAt,
        },
      },
      { status: 200 },
    );
  } catch (error) {
    const { payload, status } = buildErrorResponse(error);
    return NextResponse.json(payload, { status });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const user = await requireAuth();

    const existing = await prisma.task.findFirst({
      where: { id: params.id, userId: user.id },
    });

    if (!existing) {
      throw new AppError(404, "Task not found", "not_found");
    }

    await prisma.task.delete({ where: { id: existing.id } });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    const { payload, status } = buildErrorResponse(error);
    return NextResponse.json(payload, { status });
  }
}
