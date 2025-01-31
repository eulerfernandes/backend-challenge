import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config(); // Carrega as variáveis do .env

// Criação da conexão com o banco PostgreSQL
export const sequelize = new Sequelize(
  process.env.POSTGRES_DB as string, // Nome do banco
  process.env.POSTGRES_USER as string, // Usuário do banco
  process.env.POSTGRES_PASSWORD as string, // Senha do banco
  {
    host: process.env.POSTGRES_HOST, // Host do banco (postgres)
    port: Number(process.env.POSTGRES_PORT), // Porta (5432)
    dialect: "postgres", // Definir o banco como PostgreSQL
    logging: false, // Desativar logs SQL no console
  }
);

// Teste de conexão
sequelize
  .authenticate()
  .then(() => console.log("🔥 Conectado ao PostgreSQL com sucesso!"))
  .catch((err) => console.error("❌ Erro ao conectar ao banco:", err));

export default sequelize;
