// @ts-ignore
import {CarRepositoryBuilder} from "./CarRepositoryBuilder";
import {UserRepository} from "../../src/backend/repository/UserRepository";
import {IUser} from "../../src/Core domain/online store/Entities/VO/User";
import {UserRepositoryBuilder} from "./UserRepositoryBuilder";

export class InMemoryUserRepository implements UserRepository{
    private users: Map<string, IUser>

    constructor() {
        this.users = new Map()
    }

    async addUser(car: IUser): Promise<"Utilisateur ajouté"> {
        if(this.users.get(car.id)) {
            this.users.delete(car.id);
        }
        this.users.set(car.id,car)
        return Promise.resolve('Utilisateur ajouté')
    }

    addUsers(usersTab: IUser[]) {
        for(let user of usersTab) {
            return  this.users.set(user.id ,user)
        }
        return this.users
    }

    async getUsers():Promise<IUser[]> {
        const result = UserRepositoryBuilder.usersStub()
        return Promise.resolve(result)
    }

    async getUser(id: string): Promise<IUser>{
        return Promise.resolve(this.users.get(id))
    }

    async deleteUser(id: string): Promise<"Utilisateur supprimé"> {
            if(this.users.get(id)) {
                this.users.delete(id)
                return Promise.resolve("Utilisateur supprimé")
            }
    }
}
