import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            usuario: [],
            erro: null
        };
    }

    componentDidMount() {
        fetch(`http://localhost:3008/sistema/usuarios`)
            .then(usuario =>
                usuario.json().then(usuario => this.setState({ usuario }))
            )
            .catch(erro => this.setState({ erro }));
    }

    render() {
        const { usuario } = this.state;
        return usuario.map((usuario) => (
            <div key={usuario.id} className="usuario-info">
                <div className="card mb-4">
                    <h5 className="card-header">{usuario.nome}</h5>
                    <div className="card-body">
                        <div className="media">
                            <p><strong>{usuario.cidade}</strong></p>
                        </div>
                        <div className="text-right">
                            <Link
                                to={`/usuario/detalhe/${usuario.id}`}
                                className="btn btn-success mr-3"
                                role="button"
                            >
                                Detalhes
              </Link>
                            <Link
                                to={`/usuario/deletar/${usuario.id}`}
                                className="btn btn-danger mr-3"
                                role="button"
                            >
                                Remover
              </Link>
                            <Link
                                to={`/usuario/editar/${usuario.id}`}
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