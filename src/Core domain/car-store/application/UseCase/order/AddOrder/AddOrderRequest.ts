export class AddOrderRequest {
    constructor(
        readonly user_id: string,
        readonly car_id: string,
        readonly amount: number,
        readonly date_order: Date,
    ){}
}