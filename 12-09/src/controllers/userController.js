const User = require('../models/user');
const status = require('http-status');

exports.SearchAll = (req, res, next) => {
    User.findAll()
        .then(user => {
            if (user) {
                res.status(status.OK).send(user);
            }
        })
        .catch(error => next(error));

}
exports.Insert = (req, res, next) => {
    const nome = req.body.nome;
    const datanascimento = req.body.datanascimento;
    const ativo = req.body.ativo;
    const cidade = req.body.cidade;
    const estado = req.body.estado;

    User.create({
            nome: nome,
            datanascimento: datanascimento,
            ativo: ativo,
            cidade: cidade,
            estado: estado
        })
        .then(user => {
            if (user) {
                res.status(status.OK).send(user);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
}

exports.Update = (req, res, next) => {
    const id = req.body.id;
    const nome = req.body.nome;
    const datanascimento = req.body.datanascimento;
    const ativo = req.body.ativo;
    const cidade = req.body.cidade;
    const estado = req.body.estado;

    User.findByPk(id)
        .then(user => {
            if (user) {
                user.update({
                        nome: nome,
                        datanascimento: datanascimento,
                        ativo: ativo,
                        cidade: cidade,
                        estado: estado
                    }, {
                        where: {
                            id: id
                        }
                    })
                    .then(() => {
                        res.status(status.OK).send();
                    }).catch(error => next(error));
            } else {
                res.status(status.NOT_FOUND).send()
            }
        }).catch(error => next(error));
}

exports.SearchOne = (req, res, next) => {
    const id = req.parms.id;

    User.findByPk(id)
    .then(user => {
        if(user){
            res.status(status.OK).send(user);
        }else{
            res.status(status.NOT_FOUND).send();
        }
    }) .catch(error => next (next));
}

exports.Delete = (req, res, next) => {
    const id= req.parms.id;

    User.findByPk(id)
    .then(user => {
        if(user){
            user.destroy({
                where: {id: id}
            })
            .then(()=>{
                res.status(status.OK).send(user);
            })
        }else{
            res.status(status.NOT_FOUND).send();
        }
    }) .catch(error => next (next));

}