import express from "express";
import dotenv from "dotenv";
import { testElasticConnection } from "@infra/elastic/service";
import logger from "@infra/logger/logger";
import authRoutes from "./routes/auth.routes"; //

dotenv.config();

const app = express();
app.use(express.json());

const PORT = Number(process.env.AUTH_PORT) || 3001;

// Função assíncrona para iniciar o servidor após testar a conexão com o ElasticSearch
const startServer = async () => {
  try {
    await testElasticConnection(); // Aguarda o teste de conexão antes de iniciar o servidor

    // Configuração das rotas após garantir que a conexão está funcionando
    app.use("/auth", authRoutes);

    app.listen(PORT, () => {
      logger.info(`🚀 Auth service running on port ${PORT}`);
    });
  } catch (error) {
    logger.error(
      `Erro ao iniciar o servidor: ${
        error instanceof Error ? error.message : error
      }`
    );
    process.exit(1); // Finaliza o processo em caso de erro
  }
};

startServer();
