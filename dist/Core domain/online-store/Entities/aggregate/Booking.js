"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Booking = void 0;
class Booking {
    constructor(c, b) {
        this.car = c;
        this.booker = b;
    }
    isBookable(user, car) {
        if (car.available) {
            return true;
        }
    }
}
exports.Booking = Booking;
