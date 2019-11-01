const Funcionario = require('../models/funcionario');
const status = require('http-status');

exports.SearchAll = (req, res, next) => {
    Funcionario.findAll()
    .then(funcionario => {
        if(funcionario){
            res.status(status.OK).send(funcionario);
        } 
    })
    .catch(error => next(error));
}

exports.Insert = (req, res, next) => {
    const nome = req.body.nome;
    const matricula = req.body.matricula;
    const salario = req.body.salario;
    const dataNascimento = req.body.dataNascimento;
    const cpf = req.body.cpf;
    const email = req.body.email;
    const idProjeto = req.body.idProjeto;

    Funcionario.create({
        nome: nome,
        matricula: matricula,
        salario: salario,
        dataNascimento: dataNascimento,
        cpf: cpf,
        email: email,
        idProjeto: idProjeto
    })
    .then(funcionario => {
        if(funcionario){
            res.status(status.OK).send(funcionario);
        } else{
            res.status(status.NOT_FOUND).send();
        } 
    })
    .catch(error => next(error));
}

exports.Update = (req, res, next) => {
    const id = req.params.id;
    const nome = req.body.nome;
    const matricula = req.body.matricula;
    const salario = req.body.salario;
    const dataNascimento = req.body.dataNascimento;
    const cpf = req.body.cpf;
    const email = req.body.email;
    const idProjeto = req.body.idProjeto;

    Funcionario.findByPk(id)
    .then(funcionario => {
        if(funcionario){
            funcionario.update({
                nome: nome,
                matricula: matricula,
                salario: salario,
                dataNascimento: dataNascimento,
                cpf: cpf,
                email: email,
                idProjeto: idProjeto
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
    
    Funcionario.findByPk(id)
    .then(funcionario => {
        if(funcionario){
            res.status(status.OK).send(funcionario);
        }else{
            res.status(status.NOT_FOUND).send();
        }
    }) .catch(error => next(error));
}

exports.Delete = (req, res, next) => {
    const id = req.params.id;

    Funcionario.findByPk(id)
    .then(funcionario => {
        if(funcionario){
            funcionario.destroy({
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