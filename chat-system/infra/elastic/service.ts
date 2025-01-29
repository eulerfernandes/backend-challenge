import elasticClient from "./config";

const indexName = "chat-messages";

// Testar conexão com o ElasticSearch
export const testElasticConnection = async () => {
  try {
    const health = await elasticClient.cluster.health();
    console.log("Conexão com ElasticSearch bem-sucedida:", health.status);
  } catch (error) {
    console.error("Erro ao conectar ao ElasticSearch:", error);
  }
};

// Criar um índice no ElasticSearch
export const createIndex = async () => {
  const exists = await elasticClient.indices.exists({ index: indexName });

  if (!exists) {
    await elasticClient.indices.create({
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

// Adicionar um documento ao índice
export const addMessage = async (user: string, message: string) => {
  await elasticClient.index({
    index: indexName,
    body: {
      user,
      message,
      timestamp: new Date(),
    },
  });

  console.log("Mensagem adicionada ao ElasticSearch.");
};

// Buscar mensagens por usuário
export const searchMessages = async (user: string) => {
  const result = await elasticClient.search({
    index: indexName,
    body: {
      query: {
        match: { user },
      },
    },
  });

  return result.hits.hits;
};
