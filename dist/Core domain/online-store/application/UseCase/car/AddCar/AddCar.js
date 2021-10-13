"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCar = void 0;
const AddCarResponse_1 = require("./AddCarResponse");
const Car_1 = require("../../../../Entities/Car");
const User_1 = require("../../../../Entities/VO/User");
class AddCar {
    constructor(repository) {
        this.repository = repository;
    }
    execute(request, presenter) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = new AddCarResponse_1.AddCarResponse();
            const user = new User_1.User(request.owner.firstName, request.owner.lastName, request.owner.address, request.owner.email, request.owner.password);
            const car = new Car_1.Car(request.name, request.km, request.price, request.image, user.id);
            yield this.repository.addCar(car);
            response.car_id = car;
            presenter.presentAddCar(response);
        });
    }
}
exports.AddCar = AddCar;
