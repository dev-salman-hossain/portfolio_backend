import { createClient, RedisClientType } from "redis";
import env from "./env.js";

const redisClient: RedisClientType = createClient({
    url: env.redis_url,
});

redisClient.on("error", (err) => console.error("Redis Client Error", err));
redisClient.on("connect", () => console.log("Redis connected successfully"));

/**
 * Establishes connection to the Redis server if not already connected.
 */
const connectRedis = async () => {
    try {
        if (!redisClient.isOpen) {
            await redisClient.connect();
        }
    } catch (error) {
        console.error("Redis connection failed:", error);
        throw error;
    }
};

export { redisClient };
export default connectRedis;
