import express from 'express'
import {createUser, deleteUser, getUser, getUsers} from "../controllers/UserController";

const router = express.Router();

router.post("/api/user", createUser)
router.delete("/api/user/:id", deleteUser)
router.get("/api/user/:id", getUser)
router.get("/api/users", getUsers)

export default router