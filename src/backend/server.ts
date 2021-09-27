import app from "./app";

const PORT = process.env.SERVER_PORT || 8000

app.listen(PORT, () => console.log(`Serveur running ${PORT}`))