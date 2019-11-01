import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projeto: [],
            erro: null
        };
    }

    componentDidMount() {
        fetch(`http://localhost:3008/sistema/projetos`)
            .then(projeto =>
                projeto.json().then(projeto => this.setState({ projeto }))
            )
            .catch(erro => this.setState({ erro }));
    }

    render() {
        const { projeto } = this.state;
        return projeto.map((projeto, index) => (

            <div className="projeto-info">
                <div key={index} className="card mb-4">
                    <h5 className="card-header">{projeto.nome}</h5>
                    <div className="card-body">
                        <div className="media">
                           <p><strong>{projeto.area}</strong></p>
                        </div>
                        <div className="text-right">
                            <Link
                                to={`/DetalhesProjeto/${projeto.id}`}
                                className="btn btn-success mr-3"
                                role="button"
                            >
                                Detalhes
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
        ))
    };
}