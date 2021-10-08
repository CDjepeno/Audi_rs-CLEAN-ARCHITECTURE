import {UserService} from "../../../../backend/services/userService";
import {UserPresenter} from "../../../../backend/controllers/user/UserPresenter";
import {AddUser} from "../UseCase/user/AddUser/AddUser";
import {DeleteUser} from "../UseCase/user/DeleteUser/DeleteUser";
import {GetUser} from "../UseCase/user/GetUser/GetUser";
import {GetUsers} from "../UseCase/user/GetUsers/GetUsers";


const userRepository = new UserService()

const addUserInteractor = new AddUser(userRepository)
const deleteUserInteractor = new DeleteUser(userRepository)
const getUserInteractor = new GetUser(userRepository)
const getUsersInteractor = new GetUsers(userRepository)

export {addUserInteractor, deleteUserInteractor, getUserInteractor, getUsersInteractor}