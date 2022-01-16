import { UserProvider } from "../../userProvider";
import { AddUser } from '../../../../../Core domain/car-store/application/UseCase/user/AddUser/AddUser';


const userRepository = new UserProvider()

const addUserInteractor = new AddUser(userRepository)

export { addUserInteractor }