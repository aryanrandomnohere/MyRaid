import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

let prismaClient: PrismaClient | undefined = global.prisma;

export const getPrisma = () => {
  if (!prismaClient) {
    prismaClient = new PrismaClient();
    if (process.env.NODE_ENV !== "production") {
      global.prisma = prismaClient;
    }
  }
  return prismaClient;
};
