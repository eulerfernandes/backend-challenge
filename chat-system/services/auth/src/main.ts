import express from "express";
import dotenv from "dotenv";
import { testElasticConnection } from "../../../infra/elastic/service";
import logger from "../../../infra/logger"; // Importando o logger

dotenv.config();

const app = express();
app.use(express.json());

// Função assíncrona para iniciar o servidor após testar a conexão com o ElasticSearch
const startServer = async () => {
  try {
    await testElasticConnection(); // Aguarda o teste de conexão antes de iniciar o servidor

    // Importação das rotas após garantir que a conexão está funcionando
    import("./routes/auth.routes").then(({ default: authRoutes }) => {
      app.use("/auth", authRoutes);
    });

    const PORT = process.env.AUTH_PORT || 3001;
    app.listen(PORT, () => {
      logger.info(`🚀 Auth service running on port ${PORT}`);
    });
  } catch (error) {
    logger.error("Erro ao iniciar o servidor:", error);
    process.exit(1); // Finaliza o processo em caso de erro
  }
};

startServer();
