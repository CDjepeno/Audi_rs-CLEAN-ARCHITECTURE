"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.UserController = void 0;
const userService_1 = require("../../services/userService");
const userModel_1 = __importStar(require("../../models/userModel"));
const index_1 = __importDefault(require("../../../Core domain/car-store/application/interactors/index"));
class UserController {
    register(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = req.body;
                index_1.default.execute(user);
                res.json('Utilisateur ajouter');
                next();
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
    login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            return userModel_1.default.findOne({ email })
                .then(user => {
                if (!user) {
                    const message = "Utilisateur inconnu";
                    return res.status(404).json({ message });
                }
                else {
                    userModel_1.PasswordVerify(user, password, res);
                }
            })
                .catch(err => res.status(500).send(err));
        });
    }
    deleteUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userService = new userService_1.UserService();
                yield userService.userDelete(req.params.id);
                res.json('Utilisateur supprimé');
                next();
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
    getUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userService = new userService_1.UserService();
                const user = yield userService.getUser(req.params.id);
                res.json(user);
                next();
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
    getUsers(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userService = new userService_1.UserService();
                const users = yield userService.getUsers();
                res.json(users);
                next();
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
}
exports.UserController = UserController;
//
//
//
