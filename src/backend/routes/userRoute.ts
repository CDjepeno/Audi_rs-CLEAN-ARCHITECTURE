import express from 'express'
import {createUser, deleteUser, getUser, getUsers} from "../controllers/UserController";

const UserRoutes = express.Router();

UserRoutes.post("/api/user", createUser)
UserRoutes.delete("/api/user/:id", deleteUser)
UserRoutes.get("/api/user/:id", getUser)
UserRoutes.get("/api/users", getUsers)

export default UserRoutes