"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = require("../../../../backend/services/userService");
const AddUser_1 = require("../UseCase/user/AddUser/AddUser");
const userRepository = new userService_1.UserService();
const addUser = new AddUser_1.AddUser(userRepository);
exports.default = addUser;
