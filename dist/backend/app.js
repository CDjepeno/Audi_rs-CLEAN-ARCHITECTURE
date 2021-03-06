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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongodb_1 = require("./database/mongodb");
const dotenv = __importStar(require("dotenv"));
const userRoute_1 = __importDefault(require("./routes/userRoute"));
const carRoute_1 = __importDefault(require("./routes/carRoute"));
const app = express_1.default();
app
    .use(express_1.default.json())
    .use(userRoute_1.default)
    .use(carRoute_1.default);
if (process.env.NODE_ENV === "dev") {
    dotenv.config({ path: __dirname + '/config/.dev.env' });
    mongodb_1.connectDb(process.env.MONGO_URI);
}
if (process.env.NODE_ENV === "test") {
    console.log('ok yes');
    dotenv.config({ path: __dirname + '/config/.test.env' });
    mongodb_1.connectDb(process.env.MONGO_URI_TEST);
}
if (process.env.NODE_ENV === "production") {
    dotenv.config();
    mongodb_1.connectDb(process.env.MONGO_URI);
}
app.get('/', (req, res) => {
    res.send('hello world');
});
exports.default = app;
