import { Queue } from "bullmq";
import { redisOptions } from "../redis/config";

const emailQueue = new Queue("emailQueue", { connection: redisOptions });

export const addEmailToQueue = async (emailData: object) => {
  await emailQueue.add("sendEmail", emailData);
};
