import { Request, Response, NextFunction } from "express";
import UserService from "./user.service";

class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async login(req: Request, res: Response, next: NextFunction) {
    const { email, pswd } = req.body;

    try {
      const result = await this.userService.login(email, pswd);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(401).json({ message: error.message });
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    const { email, pswd } = req.body;

    try {
      const result = await this.userService.create(email, pswd);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

}

export default UserController;
