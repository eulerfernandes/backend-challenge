"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UsersController {
    static getAllUsers(req, res) {
        res.json({ message: "List of users" });
    }
    static getUserById(req, res) {
        res.json({ message: `User with ID ${req.params.id}` });
    }
    static createUser(req, res) {
        res.json({ message: "User created", data: req.body });
    }
    static updateUser(req, res) {
        res.json({ message: `User ${req.params.id} updated`, data: req.body });
    }
    static deleteUser(req, res) {
        res.json({ message: `User ${req.params.id} deleted` });
    }
}
exports.default = UsersController;
