const Posts = require('../models/posts');
const status = require('http-status');

exports.SearchAll = (req, res, next) => {
    Posts.findAll()
        .then(posts => {
            if (posts) {
                res.status(status.OK).send(posts);
            }
        })
        .catch(error => next(error));

}
exports.Insert = (req, res, next) => {
    const titulo = req.body.titulo;
    const descricao = req.body.descricao;
    const idusuario = req.body.idusuario;
    

    Posts.create({
            titulo: titulo,
            descricao: descricao,
            idusuario: idusuario,
            
        })
        .then(posts => {
            if (posts) {
                res.status(status.OK).send(posts);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
}

exports.Update = (req, res, next) => {
    const id = req.body.id;
    const titulo = req.body.titulo;
    const descricao = req.body.descricao;
    const idusuario = req.body.idusuario;
 
    Posts.findByPk(id)
        .then(posts => {
            if (posts) {
                posts.update({
                        titulo: titulo,
                        descricao: descricao,
                        idusuario: idusuario
                        
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

    Posts.findByPk(id)
    .then(posts => {
        if(posts){
            res.status(status.OK).send(posts);
        }else{
            res.status(status.NOT_FOUND).send();
        }
    }) .catch(error => next (next));
}

exports.Delete = (req, res, next) => {
    const id= req.parms.id;

    Posts.findByPk(id)
    .then(posts => {
        if(posts){
            posts.destroy({
                where: {id: id}
            })
            .then(()=>{
                res.status(status.OK).send(posts);
            })
        }else{
            res.status(status.NOT_FOUND).send();
        }
    }) .catch(error => next (next));

}