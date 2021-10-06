"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth = (req, res, next) => {
    const authorizationHeader = req.headers.autorization;
    if (!authorizationHeader) {
        const message = "Vous n'avez pas fourni de jeton d'authentification. Ajoutez-en un dans l'entête de la requete";
        res.status(401).json({ message });
    }
    const token = authorizationHeader.split(" ")[1];
    const decodedToken = jsonwebtoken_1.default.verify(token, process.env.TOKEN_SECRET, (err, decodedToken) => {
        if (err) {
            const message = "L'utilisateur n'est pas autorisé à accéder à cette ressource";
            return res.status(401).json({ message });
        }
        const userId = decodedToken.userId;
        if (req.body.userId && req.body.userId != userId) {
            const message = "L'identifiant de l'utilisateur est invalide";
            return res.status(401).json({ message });
        }
        else {
            next();
        }
    });
};
exports.auth = auth;
