import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

class DeletarProjeto extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projeto: {},
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

        fetch(`http://localhost:3008/sistema/projetos/${id}`)
            .then(data => {
                data.json().then(data => {
                    if (data.error) {
                        this.setState({ erro: data.error });
                    } else {
                        this.setState({ projeto: data });
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
                    <h5 className="card-header">{this.state.projeto.nome}</h5>
                    <div className="card-body">
                        {this.exibeErro()}
                        <p>
                            Tem certeza que deseja remover esse projeto? As pessoas podem
                            sentir falta dele :/
            </p>
                        <blockquote className="blockquote text-center">
                            <p className="mb-0">{this.state.projeto.descricao}</p>
                            <footer className="blockquote-footer">
                                {this.state.projeto.dataValidade}
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
        const { id } = this.props.match.params;

        fetch(`http://localhost:3008/sistema/projetos/${id}`, {
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

export default DeletarProjeto;
