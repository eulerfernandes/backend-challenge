import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.get("/status", (req, res) => {
  res.json({ message: "Gateway está rodando!" });
});

router.use("/api", authMiddleware, (req, res) => {
  res.json({ message: "Rota protegida pelo Gateway!" });
});

export default router;
