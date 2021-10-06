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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordVerify = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const UserSchema = new mongoose_1.default.Schema({
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    address: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true }
});
UserSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = this;
        const hash = yield bcrypt_1.default.hash(user.password, 10);
        user.password = hash;
        next();
    });
});
const PasswordVerify = (user, password, res) => {
    bcrypt_1.default
        .compare(password, user.password)
        .then(isPasswordValid => {
        if (!isPasswordValid) {
            const message = "Votre mot de passe n'est pas valide";
            return res.status(404).json({ message });
        }
        const token = jsonwebtoken_1.default.sign({ userid: user._id }, process.env.TOKEN_SECRET, { expiresIn: '24h' });
        const message = "Connecté";
        return res.json({ message, token, user });
    });
};
exports.PasswordVerify = PasswordVerify;
const UserModel = mongoose_1.default.model("User", UserSchema);
exports.default = UserModel;
