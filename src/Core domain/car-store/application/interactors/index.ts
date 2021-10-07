import {UserService} from "../../../../backend/services/userService";
import {UserPresenter} from "../../../../backend/controllers/user/UserPresenter";
import {AddUser} from "../UseCase/user/AddUser/AddUser";
import {DeleteUser} from "../UseCase/user/DeleteUser/DeleteUser";


const userRepository = new UserService()
const addUser = new AddUser(userRepository)
const deleteUser = new DeleteUser(userRepository)

export {addUser, deleteUser}