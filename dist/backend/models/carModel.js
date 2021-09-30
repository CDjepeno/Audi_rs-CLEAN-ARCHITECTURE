"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const CarSchema = new mongoose_1.default.Schema({
    name: { type: String, require: true },
    km: { type: Number, require: true },
    price: { type: Number, require: true },
    image: { type: String, require: true },
    owner: { type: String },
    available: { type: Boolean, require: true }
});
const CarModel = mongoose_1.default.model("Car", CarSchema);
exports.default = CarModel;
