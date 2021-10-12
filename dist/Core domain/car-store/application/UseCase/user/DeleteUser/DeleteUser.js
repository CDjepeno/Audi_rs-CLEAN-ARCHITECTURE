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
exports.DeleteUser = void 0;
const DeleteUserResponse_1 = require("./DeleteUserResponse");
class DeleteUser {
    constructor(repository) {
        this.repository = repository;
    }
    execute(request, presenter) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = new DeleteUserResponse_1.DeleteUserResponse();
            response.string = yield this.repository.userDelete(request.id);
            if (presenter)
                yield presenter.presentDeleteUser(response);
        });
    }
}
exports.DeleteUser = DeleteUser;
