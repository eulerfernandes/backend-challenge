import express from "express";
import dotenv from "dotenv";
import gatewayRoutes from "./routes/gateway.routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use("/gateway", gatewayRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Gateway rodando na porta ${PORT}`);
});
