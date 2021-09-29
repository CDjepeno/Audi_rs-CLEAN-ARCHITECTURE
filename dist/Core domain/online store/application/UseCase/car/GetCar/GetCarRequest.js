"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCarRequest = void 0;
class GetCarRequest {
    constructor(id, name, km, price, image, owner, available) {
        this.id = id;
        this.name = name;
        this.km = km;
        this.price = price;
        this.image = image;
        this.owner = owner;
        this.available = available;
    }
}
exports.GetCarRequest = GetCarRequest;
