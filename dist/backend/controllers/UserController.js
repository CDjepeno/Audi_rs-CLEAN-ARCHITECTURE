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
exports.createUser = void 0;
const userService_1 = require("../services/userService");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        const userService = new userService_1.UserService();
        yield userService.addUser(user);
        res.json('Utilisateur ajouter');
    }
    catch (e) {
        throw new Error(e);
    }
});
exports.createUser = createUser;
// deleteUser(id: string): Promise<"Utilisateur supprimé"> {
//     return
// }
// getUser(id: string): Promise<IUser> {
//     return
// }
// getUsers(): Promise<IUser[]> {
//     return
// }
