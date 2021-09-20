import {GetCarsResponse} from "./GetCarsResponse";

export interface GetCarsPresenter {
    presentGetCars(response: GetCarsResponse): void
}