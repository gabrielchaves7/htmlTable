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
