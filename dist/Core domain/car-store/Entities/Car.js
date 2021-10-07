"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
const Utils_1 = require("../../common/Utils");
class Car {
    constructor(name, km, price, image, owner) {
        this.name = name;
        this.km = km;
        this.price = price;
        this.image = image;
        this.owner = owner;
        this.id = Utils_1.Utils.generateUniqueId();
        this.available = true;
    }
    changeAvailable(b) {
        if (this.available) {
            this.available = b;
        }
    }
}
exports.Car = Car;
