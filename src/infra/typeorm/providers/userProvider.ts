import { IUser } from "../../../Core domain/car-store/Entities/VO/User";
import { IUserRepository } from "../../../Core domain/car-store/Repository/IUserRepository";
import { getRepository } from 'typeorm';
import { User } from "../models/User";
import { validate } from "class-validator";


export class UserProvider implements IUserRepository {
  async addUser(user: IUser) {
    try {
      const newUser = getRepository(User).create(user)
      
      const err = await validate(newUser)

      if(err.length > 0) {
        return err
      } else {
        await getRepository(User).save(newUser)
        return "User added"
      }
      
    } catch (err) {
      throw new Error(err)
    }




  }

}