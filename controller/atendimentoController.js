const { json } = require('express/lib/response');
const { resume } = require('../infra/DbConnection');
const Atendimento = require('../models/Atendimento')
// Classe de rotas

module.exports = app => {
    app.get("/cadastro", (req, res) => {
      Atendimento.imprimeTodos(res)
    });

    app.post("/cadastro", (req, res) => {
        const atendimento = req.body

        Atendimento.adiciona(atendimento)
        console.log(req.body)
    });

    app.patch("/cadastro/:id", (req, res) => {
      const id = parseInt(req.params.id)

      const valores = req.body

      Atendimento.atualizaParcial(id, valores, res)

    })

    app.delete("/cadastro/:id", (req, res) => {
      const id = parseInt(req.params.id)

      Atendimento.deleta(id, res)
    })
}