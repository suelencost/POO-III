import React, { Component } from 'react';
import { Link } from "react-router-dom";
//import React from 'react';
//import MaterialTable from 'material-table';

export default class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            evento: [],
            erro: null
        };
    }

    componentDidMount() {
        fetch(`http://localhost:3008/sistema/evento`)
            .then(evento =>
                evento.json().then(evento => this.setState({ evento }))
            )
            .catch(erro => this.setState({ erro }));
    }

    render() {
        const { evento } = this.state;
        return evento.map((evento) => (

            <div key={evento.id} className="evento-info">
                <div className="card mb-4">
                    <h5 className="card-header">{evento.titulo}</h5>
                    <div className="card-body">
                        <div className="media">
                           <p><strong>{evento.descricao}</strong></p>
                        </div>
                        <div className="text-right">
                            <Link
                                to={`/evento/detalhe/${evento.id}`}
                                className="btn btn-success mr-3"
                                role="button"
                            >
                                Detalhes
              </Link>
                            <Link
                                to={`/evento/deletar/${evento.id}`}
                                className="btn btn-danger mr-3"
                                role="button"
                            >
                                Remover
              </Link>
                            <Link
                                to={`/evento/editar/${evento.id}`}
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