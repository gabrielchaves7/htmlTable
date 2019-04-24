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

    app.post('/adicionaProduto', function (req, res) {
        var produto = req.body;
        controllerRoute.adicionaProduto(produto);
    });

    app.route('/api/produtos')
        .get(function(req, res) {
            controllerRoute.getProdutos(req, res);
        })
        .post(function(req, res) {
            var requisicao = gerarRequisicaoParaRemover(req.body[0].ID, "PRODUTO");
            controllerRoute.remove(requisicao);  
        })
        .put(function(req, res) {
            var data = {
                "ID": req.body[0].ID,
                "Data": data = req.body[0]
            }
            controllerRoute.updateProduto(data);   
        });

    app.post('/adicionaLoja', function (req, res) {
        var loja = req.body;
        controllerRoute.adicionaLoja(loja)
    });
    
    app.route('/api/loja')
        .get(function(req, res) {
            controllerRoute.getLoja(req,res);
        })
        .post(function(req, res) {
            var requisicao = gerarRequisicaoParaRemover(req.body[0].ID, "LOJA");
            controllerRoute.remove(requisicao);
        })
        .put(function(req, res) {
            var data = {
                "ID": req.body[0].ID,
                "Data": data = req.body[0]
            }
            controllerRoute.updateLoja(data);  
        });

    app.post('/adicionaEstoque', function (req, res) {
        var estoque = req.body;
        controllerRoute.adicionaEstoque(estoque);
    });

    app.route('/api/estoque')
        .get(function(req, res) {
            controllerRoute.getEstoque(req, res);
        })
        .post(function(req, res) {
            var data = {
                "ID_Produto": req.body[0].ID_Produto,
                "ID_Loja": req.body[0].ID_Loja
            }
            controllerRoute.removeEstoque(data);
        })
        .put(function(req, res) {
            var data = {
                "ID_Produto": req.body[0].ID_Produto,
                "ID_Loja": req.body[0].ID_Loja
            }
            controllerRoute.updateEstoque(data);
        });

    app.get('/api/produtoIDS/all', controllerRoute.getProdutoIDS);

    app.get('/api/lojaIDS/all', controllerRoute.getLojaIDS);



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