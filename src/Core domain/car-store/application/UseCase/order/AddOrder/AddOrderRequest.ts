export class AddOrderRequest {
    constructor(
        readonly user: string,
        readonly car: string,
        readonly amount: number,
        readonly date_order: Date,
    ){}
}