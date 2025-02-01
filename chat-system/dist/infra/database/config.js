"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testConnection = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
// Carrega variáveis de ambiente
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const databaseConfig = {
    host: process.env.POSTGRES_HOST || "localhost",
    port: Number(process.env.POSTGRES_PORT) || 5432,
    database: process.env.POSTGRES_DB || "chat_system",
    username: process.env.POSTGRES_USER || "postgres",
    password: process.env.POSTGRES_PASSWORD || "password",
    dialect: "postgres",
};
exports.sequelize = new sequelize_1.Sequelize(databaseConfig.database, databaseConfig.username, databaseConfig.password, {
    host: databaseConfig.host,
    port: databaseConfig.port,
    dialect: databaseConfig.dialect,
    logging: false, // Pode ativar se quiser ver logs de SQL
});
// Testa a conexão
const testConnection = async () => {
    try {
        await exports.sequelize.authenticate();
        console.log("Conexão com o banco de dados bem-sucedida!");
    }
    catch (error) {
        console.error("Erro ao conectar ao banco de dados:", error);
    }
};
exports.testConnection = testConnection;
