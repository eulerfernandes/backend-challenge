import { Request, Response } from "express";

class UsersController {
  static getAllUsers(req: Request, res: Response) {
    res.json({ message: "List of users" });
  }

  static getUserById(req: Request, res: Response) {
    res.json({ message: `User with ID ${req.params.id}` });
  }

  static createUser(req: Request, res: Response) {
    res.json({ message: "User created", data: req.body });
  }

  static updateUser(req: Request, res: Response) {
    res.json({ message: `User ${req.params.id} updated`, data: req.body });
  }

  static deleteUser(req: Request, res: Response) {
    res.json({ message: `User ${req.params.id} deleted` });
  }
}

export default UsersController;
