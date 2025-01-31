export class ChatService {
  async sendMessage(messageData: {
    message: string;
    userId: string;
  }): Promise<any> {
    return { message: "Mensagem enviada", data: messageData };
  }

  async getMessages(chatId: string): Promise<any> {
    return { chatId, messages: [] }; // Simulação de retorno
  }
}
