import {DeleteCarResponse} from "./DeleteCarResponse";

export interface DeleteCarPresenter {
    presentDeleteCar(response: "Véhicule supprimé"): Promise<"Véhicule supprimé">
}