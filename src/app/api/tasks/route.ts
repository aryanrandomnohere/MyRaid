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

const createTaskSchema = z.object({
  title: z.string().min(1).max(120),
  description: z.string().min(1).max(2000),
  status: statusSchema.optional(),
});

export async function POST(request: NextRequest) {
  try {
    const user = await requireAuth();
    const body = await request.json();
    const { title, description, status } = parseBody(createTaskSchema, body);

    const encrypted = encryptText(description);

    const task = await prisma.task.create({
      data: {
        title,
        descriptionEnc: encrypted.cipherText,
        descriptionIv: encrypted.iv,
        descriptionTag: encrypted.tag,
        status: status || "todo",
        userId: user.id,
      },
    });

    return NextResponse.json(
      {
        task: {
          id: task.id,
          title: task.title,
          description,
          status: task.status,
          createdAt: task.createdAt,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    const { payload, status } = buildErrorResponse(error);
    return NextResponse.json(payload, { status });
  }
}

export async function GET(request: NextRequest) {
  try {
    const user = await requireAuth();

    const searchParams = request.nextUrl.searchParams;
    const page = Math.max(Number(searchParams.get("page") || 1), 1);
    const pageSize = Math.min(
      Math.max(Number(searchParams.get("pageSize") || 10), 1),
      50,
    );
    const status = searchParams.get("status")
      ? statusSchema.parse(searchParams.get("status"))
      : undefined;
    const search = searchParams.get("search") || undefined;

    const where = {
      userId: user.id,
      ...(status ? { status } : {}),
      ...(search
        ? { title: { contains: search, mode: "insensitive" as const } }
        : {}),
    };

    const [total, tasks] = await Promise.all([
      prisma.task.count({ where }),
      prisma.task.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip: (page - 1) * pageSize,
        take: pageSize,
      }),
    ]);

    type TaskRow = {
      id: string;
      title: string;
      descriptionEnc: string;
      descriptionIv: string;
      descriptionTag: string;
      status: "todo" | "in_progress" | "done";
      createdAt: Date;
    };

    const items = (tasks as TaskRow[]).map((task) => ({
      id: task.id,
      title: task.title,
      description: decryptText(
        task.descriptionEnc,
        task.descriptionIv,
        task.descriptionTag,
      ),
      status: task.status,
      createdAt: task.createdAt,
    }));

    return NextResponse.json(
      {
        page,
        pageSize,
        total,
        items,
      },
      { status: 200 },
    );
  } catch (error) {
    const { payload, status } = buildErrorResponse(error);
    return NextResponse.json(payload, { status });
  }
}
