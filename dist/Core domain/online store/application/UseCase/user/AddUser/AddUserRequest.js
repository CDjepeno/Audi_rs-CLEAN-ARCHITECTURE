"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUserRequest = void 0;
class AddUserRequest {
    constructor(id, firstName, lastName, email, address, password) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.address = address;
        this.password = password;
    }
}
exports.AddUserRequest = AddUserRequest;
