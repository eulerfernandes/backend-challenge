import { Dialect, Sequelize } from "sequelize";

// Carrega variáveis de ambiente
import dotenv from "dotenv";
dotenv.config();

const databaseConfig = {
  host: process.env.POSTGRES_HOST || "localhost",
  port: Number(process.env.POSTGRES_PORT) || 5432,
  database: process.env.POSTGRES_DB || "chat_system",
  username: process.env.POSTGRES_USER || "postgres",
  password: process.env.POSTGRES_PASSWORD || "password",
  dialect: "postgres" as Dialect,
};

export const sequelize = new Sequelize(
  databaseConfig.database,
  databaseConfig.username,
  databaseConfig.password,
  {
    host: databaseConfig.host,
    port: databaseConfig.port,
    dialect: databaseConfig.dialect,
    logging: false, // Pode ativar se quiser ver logs de SQL
  }
);

// Testa a conexão
export const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexão com o banco de dados bem-sucedida!");
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
  }
};
