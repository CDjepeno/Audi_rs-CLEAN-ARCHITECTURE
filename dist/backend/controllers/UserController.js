"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = exports.getUser = exports.deleteUser = exports.createUser = void 0;
const userService_1 = require("../services/userService");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userService = new userService_1.UserService();
        const user = req.body;
        yield userService.addUser(user);
        res.json('Utilisateur ajouter');
    }
    catch (e) {
        throw new Error(e);
    }
});
exports.createUser = createUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userService = new userService_1.UserService();
        yield userService.userDelete(req.params.id);
        res.json('Utilisateur supprimé');
    }
    catch (e) {
        throw new Error(e);
    }
});
exports.deleteUser = deleteUser;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userService = new userService_1.UserService();
        const user = yield userService.getUser(req.params.id);
        res.json(user);
    }
    catch (e) {
        throw new Error(e);
    }
});
exports.getUser = getUser;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userService = new userService_1.UserService();
        const users = yield userService.getUsers();
        res.json(users);
        return users;
    }
    catch (e) {
        throw new Error(e);
    }
});
exports.getUsers = getUsers;
