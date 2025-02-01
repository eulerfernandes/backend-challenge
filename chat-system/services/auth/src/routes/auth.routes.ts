import { Router, Request, Response } from "express";
import authMiddleware from "../../../auth/src/middlewares/auth.middleware";

interface AuthRequest extends Request {
  user?: { id: string };
}

const router = Router();

// 📌 Rota pública
router.get("/status", (_req: Request, res: Response) => {
  res.json({ message: "✅ Gateway está rodando!" });
});

// 📌 Rota protegida com autenticação aplicada diretamente
router.get(
  "/api/protegida",
  authMiddleware,
  (req: AuthRequest, res: Response) => {
    res.json({
      message: "🔒 Rota protegida pelo Gateway!",
      user: req.user, // Garante que a tipagem esteja correta
    });
  }
);

export default router;
