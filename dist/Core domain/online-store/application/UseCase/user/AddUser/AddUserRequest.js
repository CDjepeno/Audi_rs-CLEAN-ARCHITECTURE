"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUserRequest = void 0;
class AddUserRequest {
    constructor(firstName, lastName, email, address, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.address = address;
        this.password = password;
    }
}
exports.AddUserRequest = AddUserRequest;
