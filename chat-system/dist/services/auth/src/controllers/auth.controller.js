"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_service_1 = __importDefault(require("../services/auth.service"));
class AuthController {
    async register(req, res) {
        try {
            const user = await auth_service_1.default.register(req.body);
            return res.status(201).json(user);
        }
        catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
            return res.status(400).json({ message: "Unknown error occurred" });
        }
    }
    async login(req, res) {
        try {
            const token = await auth_service_1.default.login(req.body);
            return res.status(200).json({ token });
        }
        catch (error) {
            if (error instanceof Error) {
                return res.status(401).json({ message: error.message });
            }
            return res.status(401).json({ message: "Unknown error occurred" });
        }
    }
    async me(req, res) {
        try {
            const user = await auth_service_1.default.getUserFromToken(req.user);
            return res.status(200).json(user);
        }
        catch (error) {
            if (error instanceof Error) {
                return res.status(401).json({ message: error.message });
            }
            return res.status(401).json({ message: "Unknown error occurred" });
        }
    }
}
exports.default = new AuthController();
