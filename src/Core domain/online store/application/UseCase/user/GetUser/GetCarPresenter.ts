import {GetCarResponse} from "./GetCarResponse";

export interface GetCarPresenter {
    presentGetCar(response: GetCarResponse): void
}