import {GetCarsResponse} from "./GetCarsResponse";

export interface GetCarsPresenter {
    presentAddCar(response: GetCarsResponse): void
}