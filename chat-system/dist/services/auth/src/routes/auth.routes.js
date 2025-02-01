"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authMiddleware_1 = require("@middlewares/authMiddleware"); // Usando alias para melhor organização
const router = (0, express_1.Router)();
// 📌 Rota pública
router.get("/status", (_req, res) => {
    res.json({ message: "✅ Gateway está rodando!" });
});
// 📌 Rota protegida com autenticação aplicada diretamente
router.get("/api/protegida", (req, res, next) => (0, authMiddleware_1.authenticateToken)(req, res, next), (req, res) => {
    res.json({
        message: "🔒 Rota protegida pelo Gateway!",
        user: req.user, // Garante que a tipagem esteja correta
    });
});
exports.default = router;
