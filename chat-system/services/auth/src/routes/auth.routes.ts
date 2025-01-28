import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

// Rota pública
router.get("/status", (req, res) => {
  res.json({ message: "Gateway está rodando!" });
});

// Middleware aplicado à rota protegida
router.use("/api", authMiddleware);

router.get("/api/protegida", (req, res) => {
  res.json({ message: "Rota protegida pelo Gateway!" });
});

export default router;
