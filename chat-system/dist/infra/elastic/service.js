"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchMessages = exports.addMessage = exports.createIndex = exports.testElasticConnection = void 0;
const config_1 = __importDefault(require("./config"));
const indexName = "chat-messages";
// Testar conexão com o ElasticSearch
const testElasticConnection = async () => {
    try {
        const health = await config_1.default.cluster.health();
        console.log("Conexão com ElasticSearch bem-sucedida:", health.status);
    }
    catch (error) {
        console.error("Erro ao conectar ao ElasticSearch:", error);
    }
};
exports.testElasticConnection = testElasticConnection;
// Criar um índice no ElasticSearch
const createIndex = async () => {
    const exists = await config_1.default.indices.exists({ index: indexName });
    if (!exists) {
        await config_1.default.indices.create({
            index: indexName,
            body: {
                mappings: {
                    properties: {
                        user: { type: "keyword" },
                        message: { type: "text" },
                        timestamp: { type: "date" },
                    },
                },
            },
        });
        console.log(`Índice ${indexName} criado com sucesso.`);
    }
};
exports.createIndex = createIndex;
// Adicionar um documento ao índice
const addMessage = async (user, message) => {
    await config_1.default.index({
        index: indexName,
        body: {
            user,
            message,
            timestamp: new Date(),
        },
    });
    console.log("Mensagem adicionada ao ElasticSearch.");
};
exports.addMessage = addMessage;
// Buscar mensagens por usuário
const searchMessages = async (user) => {
    const result = await config_1.default.search({
        index: indexName,
        body: {
            query: {
                match: { user },
            },
        },
    });
    return result.hits.hits;
};
exports.searchMessages = searchMessages;
