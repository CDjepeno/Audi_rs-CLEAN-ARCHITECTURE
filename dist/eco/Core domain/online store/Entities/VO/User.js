"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const Utils_1 = require("../../../common/Utils");
class User {
    constructor(firstName, lastName, address, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.email = email;
        this.password = password;
        this.id = Utils_1.Utils.generateUniqueId();
    }
}
exports.User = User;
