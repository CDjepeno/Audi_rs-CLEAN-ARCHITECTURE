import express from 'express'
import {register, deleteUser, getUser, getUsers, login} from "../controllers/UserController";
import {auth} from "../controllers/auth/auth";

const UserRoutes = express.Router();

UserRoutes.post("/api/register", register)
UserRoutes.post("/api/login", login)
UserRoutes.delete("/api/user/:id", auth, deleteUser)
UserRoutes.get("/api/user/:id", getUser)
UserRoutes.get("/api/users", getUsers)

export default UserRoutes