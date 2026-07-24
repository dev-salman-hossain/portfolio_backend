import env from "../config/env.js";
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from "@prisma/client";
const connectionString = `${env.database_url}`
const adapter = new PrismaPg({ connectionString })
// Initialize global Prisma Client instance with Postgres adapter
const prisma = new PrismaClient({ adapter })
export { prisma }