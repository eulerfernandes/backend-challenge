"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRepository = void 0;
class ChatRepository {
    chats = new Map();
    createChat(chat) {
        this.chats.set(chat.id, chat);
    }
    getChatById(chatId) {
        return this.chats.get(chatId);
    }
    addMessageToChat(chatId, message) {
        const chat = this.chats.get(chatId);
        if (chat) {
            chat.addMessage(message);
        }
    }
    getAllChats() {
        return Array.from(this.chats.values());
    }
}
exports.ChatRepository = ChatRepository;
