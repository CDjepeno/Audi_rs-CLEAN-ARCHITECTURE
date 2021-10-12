"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const Utils_1 = require("../../../common/Utils");
class Order {
    constructor() {
        this.id = Utils_1.Utils.generateUniqueId();
        this.date_order = new Date();
    }
}
exports.Order = Order;
