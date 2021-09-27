"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoute_1 = __importDefault(require("./routes/userRoute"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongodb_1 = require("./database/mongodb");
dotenv_1.default.config();
const app = express_1.default();
app
    .use(express_1.default.json())
    .use(userRoute_1.default);
mongodb_1.connectDb(process.env.MONGO_URI);
app.get('/', (req, res) => {
    res.send('hello world');
});
exports.default = app;
