// Classe que levanta o servidor

const customExpress = require('./config/customExpress')
const conexao = require('./infra/DbConnection')

const app = customExpress();
const port = 3000;

conexao.connect(err => {
    if (err) {
        console.log('Error connecting to Database',err);
        return;
    }
    else
    console.log('Connection established');
    app.listen(port);
    console.log("servidor rodando na porta 3000");
})

