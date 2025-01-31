import type { Request, Response, NextFunction } from "express";
import TokenUtil from "../utils/token.util";
import dotenv from "dotenv";

dotenv.config();

interface AuthRequest extends Request {
  user?: { id: string }; // Define um tipo mais específico para o usuário
}

const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  const token = authHeader.split(" ")[1];

  try {
    const secretKey = process.env.JWT_SECRET;
    if (!secretKey) {
      console.error("JWT_SECRET is not defined in environment variables.");
      return res.status(500).json({ message: "Internal server error." });
    }

    const decoded = TokenUtil.verifyToken(token, secretKey) as { id: string };
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token." });
  }
};

export default authMiddleware;
