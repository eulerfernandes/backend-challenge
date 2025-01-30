import { Router, Request, Response, NextFunction } from "express";
import { authenticateToken } from "@middlewares/authMiddleware"; // Usando alias para melhor organização

const router = Router();

// 📌 Rota pública
router.get("/status", (_req: Request, res: Response) => {
  res.json({ message: "✅ Gateway está rodando!" });
});

// 📌 Rota protegida com autenticação aplicada diretamente
router.get(
  "/api/protegida",
  (req: Request, res: Response, next: NextFunction) =>
    authenticateToken(req, res, next),
  (req: Request, res: Response) => {
    res.json({
      message: "🔒 Rota protegida pelo Gateway!",
      user: req.user, // Garante que a tipagem esteja correta
    });
  }
);

export default router;
