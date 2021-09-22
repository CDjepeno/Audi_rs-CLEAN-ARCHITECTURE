import mongoose from 'mongoose'

export interface UserDocument extends mongoose.Document {
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

const UserModel = mongoose.model<UserDocument>("User", UserSchema);

export default UserModel;

