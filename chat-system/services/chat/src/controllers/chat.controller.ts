import { Router, Request, Response } from "express";
import { ChatService } from "../services/chat.service";

const chatRouter = Router();
const chatService = new ChatService();

chatRouter.post("/message", async (req: Request, res: Response) => {
  try {
    const messageData = req.body;
    const response = await chatService.sendMessage(messageData);
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: "Erro ao enviar mensagem" });
  }
});

chatRouter.get("/messages/:chatId", async (req: Request, res: Response) => {
  try {
    const { chatId } = req.params;
    const response = await chatService.getMessages(chatId);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar mensagens" });
  }
});

export default chatRouter;
