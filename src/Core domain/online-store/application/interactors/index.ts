import {UserService} from "../../../../backend/services/userService";
import {UserPresenter} from "../../../../backend/controllers/user/UserPresenter";
import {addUser} from "./addUserInteractor";


const userRepository = new UserService()
const presenter = new UserPresenter()

export default addUser(userRepository, presenter)