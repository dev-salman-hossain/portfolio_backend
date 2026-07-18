// init: boot-context validated [0]
// cycle-marker: portfolio activity
import { Server } from "node:http";
import app from "./app.js";
import env from "./config/env.js";
import { prisma } from "./lib/prisma.js";
import connectRedis from "./config/redis.js";

const bootstrap = async () => {
    let server: Server;
    try {
        await prisma.$connect();
        console.log("✅ Database connected successfully");
        await connectRedis();
        server = app().listen(env.port, () => {
            console.log(`🚀 Server is listening on port ${env.port}`);
        });
    } catch (error) {
        console.error("❌ Failed to start server:", error);
        process.exit(1);
    }
};

bootstrap();
