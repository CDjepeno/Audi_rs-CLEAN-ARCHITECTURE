import config from "./config/config";
import app from "./app";


app.listen(config.server.port, () => console.log(`Serveur running ${config.server.port}`))