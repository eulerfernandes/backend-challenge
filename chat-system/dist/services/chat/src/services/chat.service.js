"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatService = void 0;
class ChatService {
    async sendMessage(messageData) {
        return { message: "Mensagem enviada", data: messageData };
    }
    async getMessages(chatId) {
        return { chatId, messages: [] }; // Simulação de retorno
    }
}
exports.ChatService = ChatService;
