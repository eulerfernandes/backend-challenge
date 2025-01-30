import { Router, Request, Response } from "express";
import { authenticateToken } from "../../../../infra/providers/middlewares/authMiddleware";

const router = Router();

// 📌 Rota pública
router.get("/status", (req: Response, res: Response) => {
  res.json({ message: "✅ Gateway está rodando!" });
});

// 📌 Aplicando Middleware apenas nas rotas protegidas
router.use("/api", authenticateToken);

router.get("/api/protegida", (req: Request, res: Response) => {
  res.json({
    message: "🔒 Rota protegida pelo Gateway!",
    user: req.user, // Retorna dados do usuário autenticado
  });
});

export default router;
