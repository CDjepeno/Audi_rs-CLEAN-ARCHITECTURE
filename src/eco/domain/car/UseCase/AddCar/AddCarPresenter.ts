import {AddCarResponse} from "./AddCarResponse";

export interface AddCarPresenter {
    presentAddCar(response: AddCarResponse): void
}