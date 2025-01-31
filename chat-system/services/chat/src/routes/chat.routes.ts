import { Router, Request, Response } from "express";
import { ChatService } from "../services/chat.service";

const chatRouter = Router();
const chatService = new ChatService();

// Rota para enviar uma mensagem
chatRouter.post("/message", async (req: Request, res: Response) => {
  try {
    const messageData = req.body; // Dados da mensagem recebidos do corpo da requisição
    const response = await chatService.sendMessage(messageData); // Chama o serviço para enviar a mensagem
    res.status(201).json(response); // Responde com status 201 (Criado) e a resposta do serviço
  } catch (error) {
    res.status(500).json({ error: "Erro ao enviar mensagem" }); // Em caso de erro, responde com status 500
  }
});

// Rota para buscar mensagens por chatId
chatRouter.get("/messages/:chatId", async (req: Request, res: Response) => {
  try {
    const { chatId } = req.params; // Pega o chatId dos parâmetros da requisição
    const response = await chatService.getMessages(chatId); // Chama o serviço para buscar mensagens
    res.status(200).json(response); // Responde com status 200 (OK) e as mensagens
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar mensagens" }); // Em caso de erro, responde com status 500
  }
});

export default chatRouter;
