"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const config_1 = __importDefault(require("./config/config"));
const app = express_1.default();
// app.use(bodyParser.urlencoded({extend: false}))
app.use(body_parser_1.default.json());
app.get('/', (req, res) => {
    res.send('hello world');
});
app.listen(config_1.default.server, () => console.log(`Serveur running ${config_1.default.server.port}`));
