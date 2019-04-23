var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'nerus',
        password: '123456',
        database: 'chaves'
    }
});
var _ = require('lodash');

exports.getAll = (req, res) => {
    knex.select().from('PRODUTO').then(function (produtos) {
        res.send(produtos);
    });
};

exports.getLoja = (req, res) => {
    knex.select().from('LOJA').then(function (lojas) {
        res.send(lojas);
    });
};

exports.getEstoque = (req, res) => {
    knex.select().from('Estoque').then(function (estoques) {
        res.send(estoques);
    });
};

exports.getProdutoIDS = (req, res) => {
    knex.schema.raw("SELECT ID FROM PRODUTO").then(function (ID_Produto) {
        res.send(ID_Produto);
    });
};

exports.getLojaIDS = (req, res) => {
    knex.schema.raw("SELECT ID FROM LOJA").then(function (ID_LOJA) {
        res.send(ID_LOJA);
    });
};

exports.adicionaProduto = (req, res) => {
    knex('PRODUTO')
        .insert(req.body).then(function () {
            res.send(path + "404.html");
        }).catch(function (err) {
            res.send(err);
            console.log(err);
        });
};

exports.updateProduto = (req, res) => {
    var id = req.id;
    var data = req.data;
    
    knex('PRODUTO')
        .where('ID', ID)
        .update(data).then(function () {
            res.sendFile(path + "index.html");
        }).catch(function (err) {
            res.send(err);
            console.log(err);
        });
};

exports.remove  = (req, res) => {
    var ID = req.id;
    var table = req.table
    knex(table)
        .where('ID', ID)
        .del().then(function () {
            res.send("Registro da tabela "+req.table+" removido com sucesso!");
        }).catch(function (err) {
            res.sendFile(path + "index.html");
            console.log(err);
    });
};