import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Projeto extends Component {
    state = {
        projeto: {},
    };

    componentDidMount() {
        const { id } = this.props.match.params;

        fetch(`http://localhost:3008/sistema/projetos/${id}`)
            .then(projeto =>
                projeto.json().then(projeto => this.setState({ projeto }))
            )
            .catch(erro => this.setState({ erro }));
    }

    render() {
        const { projeto, index } = this.state;
        return (
            <div className="projeto-info">
                <div key={index} className="card mb-4">
                    <h5 className="card-header">{projeto.nome}</h5>
                    <div className="card-body">
                        <div className="media">
                            <div className="media-body">
                                <h5 className="mt-0 mb-1">{projeto.area}</h5>
                                <p>{projeto.descricao}</p>
                                <p>{projeto.dataCriacao}</p>
                                <p>{projeto.dataValidade}</p>
                            </div>
                        </div>
                        <div className="text-right">
                        <Link
                                to={`/projeto`}
                                className="btn btn-success mr-3"
                                role="button"
                            >
                                Voltar
              </Link>
                            <Link
                                to={`/DeletarProjeto/${projeto.id}`}
                                className="btn btn-danger mr-3"
                                role="button"
                            >
                                Remover
              </Link>
                            <Link
                                to={`/EditarProjeto/${projeto.id}`}
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