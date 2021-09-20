// @ts-ignore
import {InMemoryUserRepository} from "../builder/InMemoryUserRepository";
// @ts-ignore
import {UserRepositoryBuilder} from "../builder/UserRepositoryBuilder";

describe('InMemoryUserRepository Test', () => {
    it('Should register a new user', () => {
        const user = UserRepositoryBuilder.userStub()
        const userStub = new InMemoryUserRepository()
        const result = userStub.addUser(user)
        expect(result).resolves.toEqual('Utilisateur ajouté')
    })
    it('Should get a user', () => {
        const user = UserRepositoryBuilder.userStub()
        const userStub = new InMemoryUserRepository()
        userStub.addUser(user)
        const result = userStub.getUser(user.id)
        expect(result).resolves.toEqual(user)
    })
    it('Should get all users', () => {
        const userStub = new InMemoryUserRepository()
        const users = UserRepositoryBuilder.usersStub()
        userStub.addUsers(users)
        const result = userStub.getUsers()
        expect(result).resolves.toEqual(users)
    })
    it.only('Should delete car ', () => {
        const user = UserRepositoryBuilder.userStub()
        const userStub = new InMemoryUserRepository()
        userStub.addUser(user)
        const result = userStub.deleteUser(user.id)
        expect(result).resolves.toEqual('Utilisateur supprimé')
    })
})