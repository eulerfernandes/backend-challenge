"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); // Carrega as variáveis do .env
// Criação da conexão com o banco PostgreSQL
exports.sequelize = new sequelize_1.Sequelize(process.env.POSTGRES_DB, // Nome do banco
process.env.POSTGRES_USER, // Usuário do banco
process.env.POSTGRES_PASSWORD, // Senha do banco
{
    host: process.env.POSTGRES_HOST, // Host do banco (postgres)
    port: Number(process.env.POSTGRES_PORT), // Porta (5432)
    dialect: "postgres", // Definir o banco como PostgreSQL
    logging: false, // Desativar logs SQL no console
});
// Teste de conexão
exports.sequelize
    .authenticate()
    .then(() => console.log("🔥 Conectado ao PostgreSQL com sucesso!"))
    .catch((err) => console.error("❌ Erro ao conectar ao banco:", err));
exports.default = exports.sequelize;
