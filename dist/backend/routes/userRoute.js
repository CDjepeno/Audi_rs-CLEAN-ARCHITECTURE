"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import {register, deleteUser, getUser, getUsers, login, UserController} from "../controllers/user/UserController";
const UserController_1 = require("../controllers/user/UserController");
const auth_1 = require("../controllers/auth/auth");
const UserRoutes = express_1.default.Router();
const userController = new UserController_1.UserController();
UserRoutes.post("/api/register", userController.register);
UserRoutes.post("/api/login", userController.login);
UserRoutes.delete("/api/user/:id", auth_1.auth, userController.deleteUser);
UserRoutes.get("/api/user/:id", userController.getUser);
UserRoutes.get("/api/users", userController.getUsers);
exports.default = UserRoutes;
