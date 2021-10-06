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
exports.AddUser = void 0;
const AddUserResponse_1 = require("./AddUserResponse");
const User_1 = require("../../../../Entities/VO/User");
class AddUser {
    constructor(repository) {
        this.repository = repository;
    }
    execute(request, presenter) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = new AddUserResponse_1.AddUserResponse();
            const user = new User_1.User(request.firstName, request.lastName, request.address, request.email, request.password);
            yield this.repository.addUser(user);
            response.user = user;
            presenter.presentAddUser(response);
        });
    }
}
exports.AddUser = AddUser;
