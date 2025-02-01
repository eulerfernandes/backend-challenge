"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UsersService {
    static users = [
        { id: "1", name: "João", email: "joao@email.com" },
        { id: "2", name: "Maria", email: "maria@email.com" },
    ];
    static async getAllUsers() {
        return this.users;
    }
    static async getUserById(id) {
        return this.users.find((user) => user.id === id) || null;
    }
}
exports.default = UsersService;
