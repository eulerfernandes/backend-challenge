"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chat = void 0;
class Chat {
    id;
    participants;
    messages;
    constructor(id, participants) {
        this.id = id;
        this.participants = participants;
        this.messages = [];
    }
    addMessage(message) {
        this.messages.push(message);
    }
}
exports.Chat = Chat;
