"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userModel_1 = __importDefault(require("./userModel"));
const Schema = mongoose_1.default.Schema;
const CarSchema = new Schema({
    name: { type: String, require: true },
    km: { type: Number, require: true },
    price: { type: Number, require: true },
    image: { type: String, require: true },
    owner: { type: Schema.Types.ObjectId, ref: userModel_1.default },
    available: { type: Boolean, require: true }
});
const CarModel = mongoose_1.default.model("Car", CarSchema);
exports.default = CarModel;
