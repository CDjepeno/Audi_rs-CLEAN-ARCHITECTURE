"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController_1 = require("../controllers/user/UserController");
const auth_1 = require("../controllers/auth/auth");
const UserRoutes = express_1.default.Router();
UserRoutes.post("/api/register", UserController_1.register);
UserRoutes.post("/api/login", UserController_1.login);
UserRoutes.delete("/api/user/:id", auth_1.auth, UserController_1.deleteUser);
UserRoutes.get("/api/user/:id", UserController_1.getUser);
UserRoutes.get("/api/users", UserController_1.getUsers);
exports.default = UserRoutes;
