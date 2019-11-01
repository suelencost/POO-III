import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            funcionario: [],
            erro: null
        };
    }

    componentDidMount() {
        fetch(`http://localhost:3008/sistema/funcionarios`)
            .then(funcionario =>
                funcionario.json().then(funcionario => this.setState({ funcionario }))
            )
            .catch(erro => this.setState({ erro }));
    }

    render() {
        const { funcionario } = this.state;
        return funcionario.map((funcionario, index) => (

            <div className="funcionario-info">
                <div key={index} className="card mb-4">
                    <h5 className="card-header">{funcionario.nome}</h5>
                    <div className="card-body">
                        <div className="media">
                           <p><strong>{funcionario.matricula}</strong></p>
                        </div>
                        <div className="text-right">
                            <Link
                                to={`/DetalhesFuncionario/${funcionario.id}`}
                                className="btn btn-success mr-3"
                                role="button"
                            >
                                Detalhes
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
        ))
    };
}