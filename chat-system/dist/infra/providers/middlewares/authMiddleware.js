"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET_KEY = process.env.JWT_SECRET || "default_secret";
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        res.status(401).json({ error: "Token não fornecido" });
        return; // 🔥 Corrigido: Agora a função para aqui
    }
    const token = authHeader.split(" ")[1]; // Espera um formato "Bearer <token>"
    jsonwebtoken_1.default.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            res.status(403).json({ error: "Token inválido" });
            return; // 🔥 Corrigido: Agora a função para aqui também
        }
        req.user = decoded; // Adiciona o usuário ao objeto de request
        next(); // Continua o fluxo normalmente
    });
};
exports.authenticateToken = authenticateToken;
