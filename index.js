// Classe que levanta o servidor

const customExpress = require('./config/CustomExpress')
const conexao = require('./infra/DbConnection')
const tabelas = require('./infra/Tabelas')
const app = customExpress();
const port = 3000;

conexao.connect(err => {
    if (err) {
        console.log('Error connecting to Database',err);
        return;
    }
    else
    console.log('Connection established');
    tabelas.init(conexao);
    app.listen(port);
    console.log("servidor rodando na porta 3000");
})

