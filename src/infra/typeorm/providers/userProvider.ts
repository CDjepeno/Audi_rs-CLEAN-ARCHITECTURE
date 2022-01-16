import { IUser } from "../../../Core domain/car-store/Entities/VO/User";
import { IUserRepository } from "../../../Core domain/car-store/Repository/IUserRepository";
import { getRepository } from 'typeorm';
import { User } from "../models/User";
import { validate } from "class-validator";


export class UserProvider implements IUserRepository {
  async addUser(user: IUser) {
    try {
      const newUser = await getRepository(User).create(user)
      
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

  async getUser(idUser: number) {
    try {
      const user = await getRepository(User).findOne(idUser)
      if(!user) {
        throw new Error("Unknow this user")
      }
      return user
    } catch (err) {
      throw new Error(err)
    }
  }

  async getUsers() {
    try {
      const users = await getRepository(User).find()

      if(users.length < 1) {
        throw new Error("Not user register for this moment")
      }
      return users
    } catch (err) {
      throw new Error(err)
    }
  }

  async deleteUser(IdUser:number) {
    try {
      const userDelete = await getRepository(User).findOne(IdUser)

      if(!userDelete) {
        throw new Error("Unknow this user")
      }
      await getRepository(User).delete(IdUser)
      return `User ${userDelete.firstname} deleted`
    } catch (err) {
      throw new Error(err)
    }
  }

}