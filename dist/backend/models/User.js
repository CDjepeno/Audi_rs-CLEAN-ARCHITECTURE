"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    address: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true }
});
const User = mongoose_1.model('User', UserSchema);
