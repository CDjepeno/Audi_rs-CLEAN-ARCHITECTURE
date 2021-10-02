import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

export interface IUserDocument extends mongoose.Document {
    firstName: string;
    lastName: string;
    address: string;
    email: string;
    password: string;
}

const UserSchema = new mongoose.Schema({
    firstName: {type: String, require: true},
    lastName: {type: String, require: true},
    address: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true}
})

UserSchema.pre('save', async function(next) {
    const user = this

    const hash = await bcrypt.hash(user.password, 10)

    user.password = hash

    next()
})

const UserModel = mongoose.model<IUserDocument>("User", UserSchema);

export default UserModel;

