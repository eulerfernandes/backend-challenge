import { Chat } from "../models/chat.model";

export class ChatRepository {
  private chats: Map<string, Chat> = new Map();

  createChat(chat: Chat): void {
    this.chats.set(chat.id, chat);
  }

  getChatById(chatId: string): Chat | undefined {
    return this.chats.get(chatId);
  }

  addMessageToChat(chatId: string, message: any): void {
    const chat = this.chats.get(chatId);
    if (chat) {
      chat.addMessage(message);
    }
  }

  getAllChats(): Chat[] {
    return Array.from(this.chats.values());
  }
}
