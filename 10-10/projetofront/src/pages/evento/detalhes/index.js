import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Evento extends Component {
    state = {
        evento: {},
        usuario: {},
    };

    componentDidMount() {
        const { id } = this.props.match.params;
        fetch(`http://localhost:3008/sistema/evento/${id}`)
            .then(evento => 
                evento.json().then(evento => {
                    this.setState({ evento })
                    
                    fetch(`http://localhost:3008/sistema/usuarios/${evento.idUsuario}`)
                        .then(usuario =>
                            usuario.json().then(usuario => this.setState({ usuario }))
                        )
                        .catch(erro => this.setState({ erro }));
                })
            )
            .catch(erro => this.setState({ erro }));
    }

    render() {
        const { evento, usuario } = this.state;
        return (
            <div className="evento-info">
                <div key={evento.idUsuario} className="card mb-4">
                    <h5 className="card-header">{evento.titulo}</h5>
                    <div className="card-body">
                        <div className="media">
                            <div className="media-body">
                                <h5 className="mt-0 mb-1">{evento.dataEvento}</h5>
                                <p>{evento.descricao}</p>
                                <p>Nome: {usuario.nome}</p>
                            </div>
                        </div>
                        <div className="text-right">
                        <Link
                                to={`/evento`}
                                className="btn btn-success mr-3"
                                role="button"
                            >
                                Voltar
              </Link>
                            <Link
                                to={`/Deletarevento/${evento.id}`}
                                className="btn btn-danger mr-3"
                                role="button"
                            >
                                Remover
              </Link>
                            <Link
                                to={`/Editarevento/${evento.id}`}
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