import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

class DeletarEvento extends Component {
    constructor(props) {
        super(props);

        this.state = {
            evento: { },
            erro: null,
            redirect: false
        };
    }

    exibeErro() {
        const { erro } = this.state;

        if (erro) {
            return (
                <div className="alert alert-danger" role="alert">
                    Erro de conexão com o servidor
        </div>
            );
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;

        fetch(`http://localhost:3008/sistema/evento/${id}`)
            .then(data => {
                data.json().then(data => {
                    if (data.error) {
                        this.setState({ erro: data.error });
                    } else {
                        this.setState({ usuario: data });
                    }
                });
            })
            .catch(erro => this.setState({ erro: erro }));
    }

    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to="/" />;
        } else {
            return (
                <div className="card">
                    <h5 className="card-header">{this.state.evento.titulo}</h5>
                    <div className="card-body">
                        {this.exibeErro()}
                        <p>
                            Tem certeza que deseja remover esse usuario? 
            </p>
                        <blockquote className="blockquote text-center">
            
                            <footer className="blockquote-footer">
                                {this.state.evento.descricao}
                            </footer>
                        </blockquote>
                        <button
                            className="btn btn-danger btn-block"
                            role="button"
                            onClick={this.handleClick}
                        >
                            Remover
                        </button>

                        <Link
                            to={`/`}
                            className="btn btn-success btn-block"
                            role="button"
                        >
                            Voltar
              </Link>
                    </div>
                </div>
            );
        }
    }

    handleClick = event => {
        const{id}=this.state.usuario;

        fetch(`http://localhost:3008/sistema/evento/${id}`, {
            method: "delete"
        })
            .then(data => {
                if (data.ok) {
                    this.setState({ redirect: true });
                } else {
                    data.json().then(data => {
                        if (data.error) {
                            this.setState({ erro: data.error });
                        }
                    });
                }
            })
            .catch(erro => this.setState({ erro: erro }));

        event.preventDefault();
    };
}

export default DeletarEvento;