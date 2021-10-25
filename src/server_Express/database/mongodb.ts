import mongoose from "mongoose";

export async function connectDb(mongoUri: string) {
    return await mongoose.connect(mongoUri)
        .then(() => console.log(`connected to database name ${process.env.DB_NAME} `))
}

