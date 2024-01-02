const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'mysql-service',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};


const mysql = require('mysql');
const connection = mysql.createConnection(config);

const tblSql = `CREATE TABLE IF NOT EXISTS nodedb.people(
    id int not null auto_increment, 
    name varchar(255), 
    primary key(id)
    );`;
connection.query(tblSql);
connection.end();

const nomes = ['Lucas', 'Ana', 'Carlos', 'Mariana', 'Rafael', 'Isabela', 'Pedro', 'Gabriela',
    'João', 'Larissa', 'Felipe', 'Juliana', 'Mateus', 'Camila', 'Gustavo', 'Bruna',
    'Daniel', 'Manuela', 'Vinícius', 'Amanda'];
const sobrenomes = ['Silva', 'Santos', 'Oliveira', 'Pereira', 'Costa', 'Lima', 'Martins', 'Ferreira',
    'Rodrigues', 'Almeida', 'Pinto', 'Gomes', 'Carvalho', 'Araújo', 'Nunes', 'Cunha',
    'Machado', 'Ribeiro', 'Souza', 'Vieira', 'Coelho'];

app.get('/', (req, res) => {

    var con = mysql.createConnection(config);

    

    con.connect(function (err) {
        if (err) throw err;

        var nome = nomes[Math.floor(Math.random() * nomes.length)];
        var sobrenome = sobrenomes[Math.floor(Math.random() * sobrenomes.length)];

        var sql = `INSERT INTO nodedb.people(name) values('${nome} ${sobrenome}');`
        con.query(sql);

        sql = `SELECT name FROM nodedb.people;`
        con.query(sql, function (err, rows, fields) {
            if (err) throw err;
            
            const html = `<h1>Full Cycle!!!</h1>\n
                        <ul>
                            ${rows.map(row => `<li>${row.name}</li>`).join('')}
                        </ul>`

            res.send(html);

        });
    });

})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})