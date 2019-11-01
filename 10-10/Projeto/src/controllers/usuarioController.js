const Usuario = require('../models/usuario');
const status = require('http-status');

exports.SearchAll = (req, res, next) => {
    Usuario.findAll()
    .then(usuario => {
        if(usuario){
            res.status(status.OK).send(usuario);
        } 
    })
    .catch(error => next(error));
}

exports.Insert = (req, res, next) => {
    const nome = req.body.nome;
    const senha = req.body.senha;
    const ativo = req.body.ativo;
    const cidade = req.body.cidade;
    const estado = req.body.estado;

    Usuario.create({
        nome: nome,
        senha: senha,
        ativo: ativo,
        cidade: cidade,
        estado: estado
    })
    .then(usuario => {
        if(usuario){
            res.status(status.OK).send(usuario);
        } else{
            res.status(status.NOT_FOUND).send();
        } 
    })
    .catch(error => next(error));
}

exports.Update = (req, res, next) => {
    const id = req.params.id;
    const nome = req.body.nome;
    const senha = req.body.senha;
    const ativo = req.body.ativo;
    const cidade = req.body.cidade;
    const estado = req.body.estado;

    Usuario.findByPk(id)
    .then(usuario => {
        if(usuario){
            usuario.update({
                nome: nome,
                senha: senha,
                ativo: ativo,
                cidade: cidade,
                estado: estado
            },
                {
                    where: {id: id}
                }
            )
            .then(() => {
                res.status(status.OK).send();
            }).catch(error => next(error));
        } else{ res.status(status.NOT_FOUND).send()}
    }) .catch(error => next(error));
}

exports.SearchOne = (req, res, next) => {
    const id = req.params.id;
    
    Usuario.findByPk(id)
    .then(usuario => {
        if(usuario){
            res.status(status.OK).send(usuario);
        }else{
            res.status(status.NOT_FOUND).send();
        }
    }) .catch(error => next(error));
}

exports.Delete = (req, res, next) => {
    const id = req.params.id;

    Usuario.findByPk(id)
    .then(usuario => {
        if(usuario){
            usuario.destroy({
                where: {id: id}
            })
            .then(() => {
            res.status(status.OK).send();
        })
        }else{
            res.status(status.NOT_FOUND).send();
        }
    }) .catch(error => next(error));
}