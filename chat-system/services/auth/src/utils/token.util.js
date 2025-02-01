"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class TokenUtil {
    static generateToken(payload, secret, expiresIn) {
        const options = { expiresIn: expiresIn }; // Força a conversão para evitar erro de tipagem
        return jsonwebtoken_1.default.sign(payload, secret, options);
    }
    static verifyToken(token, secret) {
        try {
            return jsonwebtoken_1.default.verify(token, secret);
        }
        catch (error) {
            throw new Error("Invalid or expired token");
        }
    }
}
exports.default = TokenUtil;
