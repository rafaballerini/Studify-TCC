const express = require('express');
const db = require('./config/dbConnect.js');
const routes = require('./routes/index.js');

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
    console.log("Conexão com o banco feito com sucesso");
})

const app = express();
app.use(express.json());

routes(app);

module.exports = app;