
export class AddUserRequest {
    constructor(
                readonly firstname: string,
                readonly lastname: string,
                readonly email: string,
                readonly address: string,
                readonly password: string,
                ){}
}

