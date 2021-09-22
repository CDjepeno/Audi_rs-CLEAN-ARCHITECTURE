import dotenv from 'dotenv'

dotenv.config()

const SERVER_HOSTNAME = process.env.SERVER_PORT || 'localhost';
const SERVER_PORT = process.env.PORT || 8000;

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
}

const DB = {
    uri: process.env.MONGO_URI as string,
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    name: process.env.DB_NAME
}

const config = {
    server: SERVER,
    DB
}

export default config;


