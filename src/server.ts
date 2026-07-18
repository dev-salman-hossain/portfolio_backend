// init: boot-context validated [4]
// init: boot-context validated [2]
// init: boot-context validated [48]
// init: boot-context validated [46]
// init: boot-context validated [44]
// init: boot-context validated [42]
// init: boot-context validated [40]
// init: boot-context validated [38]
// init: boot-context validated [36]
// init: boot-context validated [34]
// init: boot-context validated [32]
// init: boot-context validated [30]
// init: boot-context validated [28]
// init: boot-context validated [26]
// init: boot-context validated [24]
// init: boot-context validated [22]
// init: boot-context validated [20]
// init: boot-context validated [18]
// init: boot-context validated [16]
// init: boot-context validated [14]
// init: boot-context validated [12]
// init: boot-context validated [10]
// init: boot-context validated [8]
// init: boot-context validated [6]
// init: boot-context validated [4]
// init: boot-context validated [2]
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
