import { Message } from "../interfaces/chat.interface";

export class Chat {
  id: string;
  participants: string[];
  messages: Message[];

  constructor(id: string, participants: string[]) {
    this.id = id;
    this.participants = participants;
    this.messages = [];
  }

  addMessage(message: Message) {
    this.messages.push(message);
  }
}
