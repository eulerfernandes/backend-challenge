import { Request, Response } from "express";
import AuthService from "../services/auth.service";

class AuthController {
  async register(req: Request, res: Response) {
    try {
      const user = await AuthService.register(req.body);
      return res.status(201).json(user);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      }
      return res.status(400).json({ message: "Unknown error occurred" });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const token = await AuthService.login(req.body);
      return res.status(200).json({ token });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(401).json({ message: error.message });
      }
      return res.status(401).json({ message: "Unknown error occurred" });
    }
  }

  async me(req: Request, res: Response) {
    try {
      const user = await AuthService.getUserFromToken(req.user);
      return res.status(200).json(user);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(401).json({ message: error.message });
      }
      return res.status(401).json({ message: "Unknown error occurred" });
    }
  }
}

export default new AuthController();
