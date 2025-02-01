"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const service_1 = require("@infra/elastic/service");
const logger_1 = __importDefault(require("@infra/logger/logger"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes")); //
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = Number(process.env.AUTH_PORT) || 3001;
// Função assíncrona para iniciar o servidor após testar a conexão com o ElasticSearch
const startServer = async () => {
    try {
        await (0, service_1.testElasticConnection)(); // Aguarda o teste de conexão antes de iniciar o servidor
        // Configuração das rotas após garantir que a conexão está funcionando
        app.use("/auth", auth_routes_1.default);
        app.listen(PORT, () => {
            logger_1.default.info(`🚀 Auth service running on port ${PORT}`);
        });
    }
    catch (error) {
        logger_1.default.error(`Erro ao iniciar o servidor: ${error instanceof Error ? error.message : error}`);
        process.exit(1); // Finaliza o processo em caso de erro
    }
};
startServer();
