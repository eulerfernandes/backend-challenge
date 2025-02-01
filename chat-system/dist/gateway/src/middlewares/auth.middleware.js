"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        res.status(401).json({ error: "Unauthorized" });
        return;
    }
    // Validação simples do token (exemplo)
    if (token !== "meu-token-secreto") {
        res.status(403).json({ error: "Forbidden" });
        return;
    }
    next(); // Continua para o próximo middleware ou rota
};
exports.authMiddleware = authMiddleware;
