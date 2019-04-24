var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'nerus',
        password: '123456',
        database: 'chaves'
    }
});

exports.getProdutos = (req, res) => {
    // knex.select().from('PRODUTO').then(function (produtos) {
    //     res.send(produtos);
    // });
    var obj = [
        {
            "ID": "1",
            "Nome": "Arroz",
            "Unidade": "30"
        }
    ];

    res.send(obj);
};

exports.getProdutoIDS = (req, res) => {
    knex.schema.raw("SELECT ID FROM PRODUTO").then(function (ID_Produto) {
        res.send(ID_Produto);
    });
};

exports.adicionaProduto = (req, res) => {
    knex('PRODUTO')
        .insert(req).then(function () {
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

exports.getLoja = (req, res) => {
    // knex.select().from('LOJA').then(function (lojas) {
    //     res.send(lojas);
    // });

    var obj = [
        {
            "ID": "1",
            "Nome": "Loja1"
        }
    ];

    res.send(obj);
};

exports.getLojaIDS = (req, res) => {
    knex.schema.raw("SELECT ID FROM LOJA").then(function (ID_LOJA) {
        res.send(ID_LOJA);
    });
};

exports.adicionaLoja = (req, res) => {
    knex('Loja')
        .insert(req).then(function () {
            res.send(path + "404.html");
        }).catch(function (err) {
            res.send(err);
            console.log(err);
        });
};

exports.updateLoja = (req, res) => {
    var id = req.id;
    var data = req.data;
    
    knex('Loja')
        .where('ID', id)
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

exports.getEstoque = (req, res) => {
    // knex.select().from('Estoque').then(function (estoques) {
    //     res.send(estoques);
    // });

    var obj = [
        {
            "ID_Produto": "1",
            "ID_Loja": "1",
            "Quantidade": 40
        }
    ];

    res.send(obj);
};

exports.removeEstoque  = (req, res) => {
    knex('Estoque')
        .where({
            'ID_Produto': req.ID_Produto,
            'ID_Loja': req.ID_Loja
        })
        .del().then(function () {
            res.sendFile(path + "index.html");
        }).catch(function (err) {
            res.send(err);
            console.log(err);
        });
};

exports.updateEstoque = (req, res) => {
    knex('Estoque')
    .where({
        'ID_Produto': req.ID_Produto,
        'ID_Loja': req.ID_Loja
    })
    .update(req.body[0]).then(function () {
        res.sendFile(path + "index.html");
    }).catch(function (err) {
        res.send(err);
        console.log(err);
    });
};

exports.adicionaEstoque = (req, res) => {
    knex('Estoque')
        .insert(req.body).then(function () {
            res.send(path + "404.html");
        }).catch(function (err) {
            res.send(err);
            console.log(err);
        });
};