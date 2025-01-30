import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET || "default_secret";

// Estendendo a interface Request para incluir `user`
declare global {
  namespace Express {
    interface Request {
      user?: any; // Idealmente, defina um tipo mais específico aqui
    }
  }
}

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).json({ error: "Token não fornecido" });
    return; // 🔥 Corrigido: Agora a função para aqui
  }

  const token = authHeader.split(" ")[1]; // Espera um formato "Bearer <token>"

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      res.status(403).json({ error: "Token inválido" });
      return; // 🔥 Corrigido: Agora a função para aqui também
    }

    req.user = decoded; // Adiciona o usuário ao objeto de request
    next(); // Continua o fluxo normalmente
  });
};
