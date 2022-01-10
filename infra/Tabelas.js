class Tabelas {
    init(DbConnection){
        this.dbConnection = DbConnection;
        this.criarAtendimento();
        console.log('tabelas foram chamadas')
    }

    criarAtendimento(){
        const sql = 'create table if not exists atendimentos (id int not null AUTO_INCREMENT, name varchar(50) NOT NULL, PET VARCHAR (50), service VARCHAR(50), PRIMARY KEY (id))'

        this.dbConnection.query(sql);
}
}
module.exports = new Tabelas;
