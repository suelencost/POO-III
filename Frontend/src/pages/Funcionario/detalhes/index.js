import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class funcionario extends Component {
    state = {
        funcionario: {},
    };

    componentDidMount() {
        const { id } = this.props.match.params;

        fetch(`http://localhost:3008/sistema/funcionarios/${id}`)
            .then(funcionario =>
                funcionario.json().then(funcionario => this.setState({ funcionario }))
            )
            .catch(erro => this.setState({ erro }));
    }

    render() {
        const { funcionario, index } = this.state;
        return (
            <div className="funcionario-info">
                <div key={index} className="card mb-4">
                    <h5 className="card-header">{funcionario.nome}</h5>
                    <div className="card-body">
                        <div className="media">
                            <div className="media-body">
                                <h5 className="mt-0 mb-1">{funcionario.matricula}</h5>
                                <p>{funcionario.salario}</p>
                                <p>{funcionario.cpf}</p>
                                <p>{funcionario.email}</p>
                                <p>{funcionario.dataNascimento}</p>
                                <p>{funcionario.idProjeto}</p>
                            </div>
                        </div>
                        <div className="text-right">
                        <Link
                                to={`/funcionario`}
                                className="btn btn-success mr-3"
                                role="button"
                            >
                                Voltar
              </Link>
                            <Link
                                to={`/DeletarFuncionario/${funcionario.id}`}
                                className="btn btn-danger mr-3"
                                role="button"
                            >
                                Remover
              </Link>
                            <Link
                                to={`/EditarFuncionario/${funcionario.id}`}
                                className="btn btn-primary"
                                role="button"
                            >
                                Editar
              </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}