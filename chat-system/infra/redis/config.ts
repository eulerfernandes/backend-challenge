import Redis from "ioredis";

const redisOptions = {
  host: process.env.REDIS_HOST || "localhost",
  port: Number(process.env.REDIS_PORT) || 6379,
  password: process.env.REDIS_PASSWORD || undefined,
};

const redisClient = new Redis(redisOptions);

redisClient.on("connect", () => {
  console.log("🔥 Conectado ao Redis!");
});

redisClient.on("error", (err) => {
  console.error("Erro no Redis:", err);
});

export { redisClient, redisOptions };
