import {UserService} from "../../../../backend/services/userService";
import {UserPresenter} from "../../../../backend/controllers/user/UserPresenter";
import {AddUser} from "../UseCase/user/AddUser/AddUser";


const userRepository = new UserService()
const addUser = new AddUser(userRepository)

export default addUser