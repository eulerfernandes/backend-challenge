"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisOptions = exports.redisClient = void 0;
const ioredis_1 = __importDefault(require("ioredis"));
const redisOptions = {
    host: process.env.REDIS_HOST || "localhost",
    port: Number(process.env.REDIS_PORT) || 6379,
    password: process.env.REDIS_PASSWORD || undefined,
};
exports.redisOptions = redisOptions;
const redisClient = new ioredis_1.default(redisOptions);
exports.redisClient = redisClient;
redisClient.on("connect", () => {
    console.log("🔥 Conectado ao Redis!");
});
redisClient.on("error", (err) => {
    console.error("Erro no Redis:", err);
});
