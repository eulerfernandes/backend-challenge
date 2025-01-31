import express from "express";
import chatRouter from "./controllers/chat.controller";

const app = express();
app.use(express.json());

app.use("/chat", chatRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
