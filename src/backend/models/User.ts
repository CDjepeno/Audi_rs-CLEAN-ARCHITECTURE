import {model, Schema, Model, Document} from 'mongoose'
import {IUser} from "../../Core domain/online store/Entities/VO/User";

const UserSchema: Schema = new Schema({
    firstName: {type: String, require: true},
    lastName: {type: String, require: true},
    address: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true}
})

const User: Model<IUser> = model('User', UserSchema)