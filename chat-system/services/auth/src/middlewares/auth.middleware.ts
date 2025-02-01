import type { Request, Response, NextFunction } from "express";
import TokenUtil from "../utils/token.util";
import dotenv from "dotenv";

dotenv.config();

interface AuthRequest extends Request {
  user?: { id: string };
}

const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ message: "Access denied. No token provided." });
    return;
  }

  const token = authHeader.split(" ")[1];

  try {
    const secretKey = process.env.JWT_SECRET;
    if (!secretKey) {
      console.error("JWT_SECRET is not defined in environment variables.");
      res.status(500).json({ message: "Internal server error." });
      return;
    }

    const decoded = TokenUtil.verifyToken(token, secretKey) as { id: string };
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired token." });
  }
};

export default authMiddleware;
