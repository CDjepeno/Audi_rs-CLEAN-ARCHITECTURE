import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

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

export const PasswordVerify = (user, password, res) => {
    bcrypt
        .compare(password, user.password)
        .then(isPasswordValid => {
            if(!isPasswordValid) {
                const message = "Votre mot de passe n'est pas valide"
                return res.status(404).json({ message })
            }
            const token = jwt.sign({userid: user._id}, process.env.TOKEN_SECRET, {expiresIn: '24h'})
            const message = "Connecté"
            return res.json({message, token, user})
        })
}

const UserModel = mongoose.model<IUserDocument>("User", UserSchema);

export default UserModel;

