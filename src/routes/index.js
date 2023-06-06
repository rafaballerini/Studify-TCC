const express = require('express');
// const routerLivros = require('./personagensRoutes.js')

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send({titulo: "Curso de Node.js"})
    })

    app.use(
        express.json(),
        // routerLivros
    )
}

module.exports = routes;