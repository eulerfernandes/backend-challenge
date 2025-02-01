"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCache = exports.setCache = void 0;
const redis_1 = require("redis");
const client = (0, redis_1.createClient)({
    url: process.env.REDIS_URL || "redis://localhost:6379",
});
client.on("error", (err) => console.error("Redis Error:", err));
const setCache = async (key, value, expiration = 3600) => {
    await client.setEx(key, expiration, value);
};
exports.setCache = setCache;
const getCache = async (key) => {
    return await client.get(key);
};
exports.getCache = getCache;
