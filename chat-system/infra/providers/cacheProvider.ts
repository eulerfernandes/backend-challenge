import { createClient } from "redis";

const client = createClient({
  url: process.env.REDIS_URL || "redis://localhost:6379",
});

client.on("error", (err) => console.error("Redis Error:", err));

export const setCache = async (
  key: string,
  value: string,
  expiration = 3600
) => {
  await client.setEx(key, expiration, value);
};

export const getCache = async (key: string) => {
  return await client.get(key);
};
