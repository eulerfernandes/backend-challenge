"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const router = (0, express_1.Router)();
// Rota pública
router.get("/status", (req, res) => {
    res.json({ message: "Gateway está rodando!" });
});
// Middleware aplicado à rota "/api"
router.use("/api", auth_middleware_1.authMiddleware);
// Rota protegida
router.get("/api/protegida", (req, res) => {
    res.json({ message: "Rota protegida pelo Gateway!" });
});
exports.default = router;
