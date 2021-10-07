"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUsersRequest = void 0;
class GetUsersRequest {
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
exports.GetUsersRequest = GetUsersRequest;
