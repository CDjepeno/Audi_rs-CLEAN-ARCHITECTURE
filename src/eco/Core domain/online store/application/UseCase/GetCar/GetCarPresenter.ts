import {GetCarResponse} from "./GetCarResponse";

export interface GetCarPresenter {
    presentAddCar(response: GetCarResponse): void
}