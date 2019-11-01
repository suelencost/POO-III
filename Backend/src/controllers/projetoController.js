const Projeto = require('../models/projeto');
const status = require('http-status');

exports.SearchAll = (req, res, next) => {
    Projeto.findAll()
        .then(projeto => {
            if (projeto) {
                res.status(status.OK).send(projeto);
            }
        })
        .catch(error => next(error));
}

exports.Insert = (req, res, next) => {
    const nome = req.body.nome;
    const area = req.body.area;
    const descricao = req.body.descricao;
    const dataCriacao = req.body.dataCriacao;
    const dataValidade = req.body.dataValidade;

    Projeto.create({
        nome: nome,
        area: area,
        descricao: descricao,
        dataCriacao: dataCriacao,
        dataValidade: dataValidade
    })
        .then(projeto => {
            if (projeto) {
                res.status(status.OK).send(projeto);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
}

exports.Update = (req, res, next) => {
    const id = req.params.id;
    const nome = req.body.nome;
    const area = req.body.area;
    const descricao = req.body.descricao;
    const dataCriacao = req.body.dataCriacao;
    const dataValidade = req.body.dataValidade;

    Projeto.findByPk(id)
        .then(projeto => {
            if (projeto) {
                projeto.update({
                    nome: nome,
                    area: area,
                    descricao: descricao,
                    dataCriacao: dataCriacao,
                    dataValidade: dataValidade
                },
                    {
                        where: { id: id }
                    }
                )
                    .then(() => {
                        res.status(status.OK).send();
                    }).catch(error => next(error));
            } else { res.status(status.NOT_FOUND).send() }
        }).catch(error => next(error));
}

exports.SearchOne = (req, res, next) => {
    const id = req.params.id;

    Projeto.findByPk(id)
        .then(projeto => {
            if (projeto) {
                res.status(status.OK).send(projeto);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        }).catch(error => next(error));
}

exports.Delete = (req, res, next) => {
    const id = req.params.id;

    Projeto.findByPk(id)
        .then(projeto => {
            if (projeto) {
                projeto.destroy({
                    where: { id: id }
                })
                    .then(() => {
                        res.status(status.OK).send();
                    })
            } else {
                res.status(status.NOT_FOUND).send();
            }
        }).catch(error => next(error));
}