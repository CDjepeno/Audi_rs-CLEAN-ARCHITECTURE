import {UserService} from "../../userService";
import {AddUser} from "../../../../../Core domain/car-store/application/UseCase/user/AddUser/AddUser";
import {DeleteUser} from "../../../../../Core domain/car-store/application/UseCase/user/DeleteUser/DeleteUser";
import {GetUser} from "../../../../../Core domain/car-store/application/UseCase/user/GetUser/GetUser";
import {GetUsers} from "../../../../../Core domain/car-store/application/UseCase/user/GetUsers/GetUsers";


const userRepository = new UserService()

const addUserInteractor = new AddUser(userRepository)
const deleteUserInteractor = new DeleteUser(userRepository)
const getUserInteractor = new GetUser(userRepository)
const getUsersInteractor = new GetUsers(userRepository)

export {addUserInteractor, deleteUserInteractor, getUserInteractor, getUsersInteractor}