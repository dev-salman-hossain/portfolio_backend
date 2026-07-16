// cycle-marker: portfolio activity
import { Server } from "node:http";
import app from "./app.js";
import env from "./config/env.js";
import { prisma } from "./lib/prisma.js";

const bootstrap = async () => {
    let server: Server;
    try {
        await prisma.$connect();
        console.log("Database connected successfully");
        server = app().listen(env.port, () => {
            console.log(`Server is listening on port ${env.port}`);
        });
    } catch (error) {
        console.error("Failed to connect database", error);
        process.exit(1);
    }
};

bootstrap();
