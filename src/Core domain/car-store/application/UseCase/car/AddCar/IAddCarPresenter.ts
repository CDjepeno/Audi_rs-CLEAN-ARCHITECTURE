import {AddCarResponse} from "./AddCarResponse";

export interface IAddCarPresenter {
    presentAddCar(response: AddCarResponse): void
}