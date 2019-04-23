var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'nerus',
        password: '123456',
        database: 'chaves'
    }
});
module.exports = function (app) {

    var express = require("express");
    var router = express.Router();

    const controllerRoute = require('../controllers/controller.js');

    var path = __basedir + '/client/views/';

    router.use(function (req, res, next) {
        next();
    });

    app.use("/", router);

    app.get('/', (req, res) => {
        res.sendFile(path + "index.html");
    });

    // Retrieve all Lojas
    app.get('/api/loja/all', controllerRoute.getLoja);
    // Retrieve all Produtos
    app.get('/api/produtos/all', controllerRoute.getAll);
    // Retrieve all Estoque
    app.get('/api/estoque/all', controllerRoute.getEstoque);

    app.get('/api/produtoIDS/all', controllerRoute.getProdutoIDS);

    app.get('/api/lojaIDS/all', controllerRoute.getLojaIDS);



    app.post('/removeProduto', function (req, res) {
        var requisicao = gerarRequisicaoParaRemover(req.body[0].ID, "PRODUTO");
        controllerRoute.remove(requisicao);  
    });

    app.post('/adicionaProduto', function (req, res) {
        var produto = req.body;
        controllerRoute.adicionaProduto(produto);
    });

    app.post('/updateProduto', function (req, res) {
        var data = {
            "ID": req.body[0].ID,
            "Data": data = req.body[0]
        }
        controllerRoute.updateProduto(data);        
    });

    app.post('/removeLoja', function (req, res) {
        var requisicao = gerarRequisicaoParaRemover(req.body[0].ID, "LOJA");
        controllerRoute.remove(requisicao);
    });

    app.post('/adicionaLoja', function (req, res) {
        knex('Loja')
            .insert(req.body).then(function () {
                res.send(path + "404.html");
            }).catch(function (err) {
                res.send(err);
                console.log(err);
            });
    });

    app.post('/updateLoja', function (req, res) {
        ID = req.body[0].ID;
        data = req.body[0];
        knex('Loja')
            .where('ID', ID)
            .update(data).then(function () {
                res.sendFile(path + "index.html");
            }).catch(function (err) {
                res.send(err);
                console.log(err);
            });
    });

    app.post('/removeEstoque', function (req, res) {
        produtoID = req.body[0].ID_Produto;
        lojaID = req.body[0].ID_Loja;
        knex('Estoque')
            .where({
                'ID_Produto': produtoID,
                'ID_Loja': lojaID
            })
            .del().then(function () {
                res.sendFile(path + "index.html");
            }).catch(function (err) {
                res.send(err);
                console.log(err);
            });
    });

    app.post('/adicionaEstoque', function (req, res) {

        knex('Estoque')
            .insert(req.body).then(function () {
                res.send(path + "404.html");
            }).catch(function (err) {
                res.send(err);
                console.log(err);
            });
    });

    app.post('/updateEstoque', function (req, res) {       
        knex('Estoque')
            .where({
                'ID_Produto': req.body[0].ID_Produto,
                'ID_Loja': req.body[0].ID_Loja
            })
            .update(req.body[0]).then(function () {
                res.sendFile(path + "index.html");
            }).catch(function (err) {
                res.send(err);
                console.log(err);
            });
    });

    app.use("*", (req, res) => {
        res.sendFile(path + "404.html");
    });
}

function gerarRequisicaoParaRemover(id, table){
    var obj = {
        "id": id,
        "table": table
    };

    return obj;
}