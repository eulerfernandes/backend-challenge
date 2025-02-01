"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const chat_service_1 = require("../services/chat.service");
const chatRouter = (0, express_1.Router)();
const chatService = new chat_service_1.ChatService();
chatRouter.post("/message", async (req, res) => {
    try {
        const messageData = req.body;
        const response = await chatService.sendMessage(messageData);
        res.status(201).json(response);
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao enviar mensagem" });
    }
});
chatRouter.get("/messages/:chatId", async (req, res) => {
    try {
        const { chatId } = req.params;
        const response = await chatService.getMessages(chatId);
        res.status(200).json(response);
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao buscar mensagens" });
    }
});
exports.default = chatRouter;
