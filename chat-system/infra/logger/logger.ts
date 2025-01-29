import winston from "winston";
import loggerConfig from "./loggerConfig";

const logger = winston.createLogger(loggerConfig);

export default logger;
