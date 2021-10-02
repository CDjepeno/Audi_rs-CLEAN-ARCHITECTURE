"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController_1 = require("../controllers/UserController");
const UserRoutes = express_1.default.Router();
UserRoutes.post("/api/user", UserController_1.createUser);
UserRoutes.delete("/api/user/:id", UserController_1.deleteUser);
UserRoutes.get("/api/user/:id", UserController_1.getUser);
UserRoutes.get("/api/users", UserController_1.getUsers);
exports.default = UserRoutes;
