
export class AddUserRequest {
    constructor(readonly id: string,
                readonly firstName: string,
                readonly lastName: string,
                readonly email: string,
                readonly address: string,
                readonly password: string,
                ){}
}

