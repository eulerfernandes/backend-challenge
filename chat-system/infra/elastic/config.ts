import { Client } from "@elastic/elasticsearch";
import * as dotenv from "dotenv";

dotenv.config();

const elasticClient = new Client({
  node: process.env.ELASTICSEARCH_URL || "http://localhost:9200",
  auth: {
    username: process.env.ELASTICSEARCH_USERNAME || "elastic",
    password: process.env.ELASTICSEARCH_PASSWORD || "changeme",
  },
});

export default elasticClient;
