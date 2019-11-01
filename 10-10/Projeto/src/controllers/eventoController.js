const Evento = require('../models/evento');
const status = require('http-status');

exports.SearchAll = (req, res, next) => {
    Evento.findAll()
    .then(evento => {
        if(evento){
            res.status(status.OK).send(evento);
        } 
    })
    .catch(error => next(error));
}

exports.Insert = (req, res, next) => {
    const titulo = req.body.titulo;
    const descricao = req.body.descricao;
    const dataEvento = req.body.dataEvento;
    const idUsuario = req.body.idUsuario;

    Evento.create({
        titulo: titulo,
        descricao: descricao,
        dataEvento: dataEvento,
        idUsuario: idUsuario
    })
    .then(evento => {
        if(evento){
            res.status(status.OK).send(evento);
        } else{
            res.status(status.NOT_FOUND).send();
        } 
    })
    .catch(error => next(error));
}

exports.Update = (req, res, next) => {
    const id = req.params.id;
    const titulo = req.body.titulo;
    const descricao = req.body.descricao;
    const dataEvento = req.body.dataEvento;
    const idUsuario = req.body.idUsuario;

    Evento.findByPk(id)
    .then(evento => {
        if(evento){
            evento.update({
                 titulo: titulo,
                 descricao: descricao,
                 dataEvento: dataEvento,
                 idUsuario: idUsuario
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
    
    Evento.findByPk(id)
    .then(evento => {
        if(evento){
            res.status(status.OK).send(evento);
        }else{
            res.status(status.NOT_FOUND).send();
        }
    }) .catch(error => next(error));
}

exports.Delete = (req, res, next) => {
    const id = req.params.id;

    Evento.findByPk(id)
    .then(evento => {
        if(evento){
            evento.destroy({
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