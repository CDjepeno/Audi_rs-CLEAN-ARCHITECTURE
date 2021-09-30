import mongoose from 'mongoose'

export interface CarDocument extends mongoose.Document {
    name: string,
    km: number,
    price: number,
    image: string,
    owner: string,
    available: boolean
}

const CarSchema = new mongoose.Schema({
    name: {type: String, require: true},
    km: {type: Number, require: true},
    price: {type: Number, require: true},
    image: {type: String, require: true},
    owner: {type: String},
    available: {type: Boolean, require: true}
})

const CarModel = mongoose.model<CarDocument>("Car", CarSchema);

export default CarModel;

