import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

// Rota pública
router.get("/status", (req, res) => {
  res.json({ message: "Gateway está rodando!" });
});

// Middleware + rota protegida
router.use("/api", authMiddleware, (req, res) => {
  res.json({ message: "Rota protegida pelo Gateway!" });
});

export default router;
