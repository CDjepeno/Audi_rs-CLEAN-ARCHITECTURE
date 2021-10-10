import mongoose from 'mongoose'
import UserModel from "./userModel";
const Schema = mongoose.Schema
export interface ICarDocument extends mongoose.Document {
    name: string,
    km: number,
    price: number,
    image: string,
    owner: string,
    available: boolean
}

const CarSchema = new Schema({
    name: {type: String, require: true},
    km: {type: Number, require: true},
    price: {type: Number, require: true},
    image: {type: String, require: true},
    owner: {type: Schema.Types.ObjectId, ref: UserModel},
    available: {type: Boolean, default: true}
})

const CarModel = mongoose.model<ICarDocument>("Car", CarSchema);

export default CarModel;

