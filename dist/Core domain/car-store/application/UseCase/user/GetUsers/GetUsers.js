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
exports.GetUsers = void 0;
const GetUsersResponse_1 = require("./GetUsersResponse");
class GetUsers {
    constructor(repository) {
        this.repository = repository;
    }
    execute(presenter) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = new GetUsersResponse_1.GetUsersResponse();
            response.users = yield this.repository.getUsers();
            if (presenter)
                yield presenter.presentGetUsers(response);
            return response;
        });
    }
}
exports.GetUsers = GetUsers;
