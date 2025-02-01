"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addEmailToQueue = void 0;
const bullmq_1 = require("bullmq");
const config_1 = require("../redis/config");
const emailQueue = new bullmq_1.Queue("emailQueue", { connection: config_1.redisOptions });
const addEmailToQueue = async (emailData) => {
    await emailQueue.add("sendEmail", emailData);
};
exports.addEmailToQueue = addEmailToQueue;
