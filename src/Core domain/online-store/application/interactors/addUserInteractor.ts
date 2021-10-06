import { UserPresenter } from "../../../../backend/controllers/user/UserPresenter";
import { IUser } from "../../Entities/VO/User";
import {IUserRepository} from "../../Repository/IUserRepository";


export const addUser = (userRepository: IUserRepository, notifierRepository: UserPresenter) => async(user: IUser) => {
    const newUser = await userRepository.addUser(user)

    notifierRepository.response = newUser

    return newUser
}