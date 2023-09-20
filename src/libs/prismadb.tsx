import { PrismaClient } from "@prisma/client";

declare global {
    var prismadb: PrismaClient | undefined;
}

const prisma = global.prismadb || new PrismaClient();

if (process.env.NODE_ENV === "development") global.prismadb = prisma;

export default prisma;
