import express from 'express'
// import {register, deleteUser, getUser, getUsers, login, UserController} from "../controllers/user/UserController";
import {UserController} from "../controllers/user/UserController";
import {auth} from "../controllers/auth/auth";

const UserRoutes = express.Router();

const userController = new UserController()

UserRoutes.get("/api/user/:id", userController.getUser)
UserRoutes.post("/api/register", userController.register)
UserRoutes.post("/api/login", userController.login)
UserRoutes.delete("/api/user/:id", auth, userController.deleteUser)
UserRoutes.get("/api/users", userController.getUsers)

export default UserRoutes