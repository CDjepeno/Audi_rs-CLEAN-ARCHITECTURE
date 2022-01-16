import { Request, Response } from "express";
import { addUserInteractor } from "../providers/adapters/user/userAdapter";

export class UserController {
  static save = async (request: Request, response: Response) => {
    try {
      const newUser = request.body;
      const result = await addUserInteractor.execute(newUser);
      if (result.length > 0) {
        return response.status(400).json(result);
      } else {
        return response.status(201).json(result);
      }
    } catch (err) {
      throw new Error(err);
    }
  };
}
