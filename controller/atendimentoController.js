// Classe de rotas

module.exports = app => {
    app.get("/cadastro", (req, res) => {
        res.send("Tela de cadastro.")
    });

    app.post("/cadastro", (req, res) => {
        console.log(req.body)

        res.send("Você está na rota de atendimentos para cadastro.")
    });
}