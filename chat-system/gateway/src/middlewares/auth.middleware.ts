import { Request, Response, NextFunction } from "express";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
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
