"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = require("../../../../backend/services/userService");
const UserPresenter_1 = require("../../../../backend/controllers/user/UserPresenter");
const addUserInteractor_1 = require("./addUserInteractor");
const userRepository = new userService_1.UserService();
const presenter = new UserPresenter_1.UserPresenter();
exports.default = addUserInteractor_1.addUser(userRepository, presenter);
