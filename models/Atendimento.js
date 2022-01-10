const { json } = require('express/lib/response');
const conexao = require('../infra/DbConnection')

class Atendimento {

    adiciona(atendimento) {
        const sql = 'INSERT INTO atendimentos SET ?'

        conexao.query(sql, atendimento, (erro, resultados) => {
            if(erro) {
                console.log(erro)
            } else {
                console.log(resultados)
            }
        })
    }

    imprimeTodos(res){
    const sql = 'select * from atendimentos'

        conexao.query(sql, (erro, resultados) => {  
            if(erro) {
                res.status(400).json(erro)
            } 
            else {
                res.status(200).json(resultados)
            }
        })
    }

    atualizaParcial(id, valores, res) {
        const sql = 'update atendimentos SET ? where id = ?'

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if(erro){
                res.status(400).json(erro);
            }
            else{
                res.status(200).json(resultados);
            }
        })
    }

    deleta(id, res){
        const sql = 'delete from atendimentos where id = ?'

        conexao.query(sql, [id], (erro, resultados) => {
            if(erro){
                res.status(400).json(erro);
            }
            else{
                res.status(200).json()
            }
        })
    }
}

module.exports = new Atendimento