import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class CriarEvento extends Component {
    constructor(props) {
        super(props);

        this.state = {
            evento: {
                titulo: "",
                dataEvento: "",
                descricao: "",
                idUsuario: 2
            },
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

    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to="/" />;
        } else {
            return (
                <form onSubmit={this.handleSubmit}>
                    {this.exibeErro()}

                    <fieldset>
                        <legend>Criar evento</legend>
                        <div className="form-group">
                            <label htmlFor="titulo">Titulo do Evento</label>
                            <input
                                type="text"
                                className="form-control"
                                id="titulo"
                                name="titulo"
                                placeholder="titulo"
                                minLength="3"
                                maxLength="40"
                                value={this.state.evento.titulo}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="descricao">Descrição</label>
                            <input
                                type="text"
                                className="form-control"
                                id="descricao"
                                name="descricao"
                                placeholder="descricao"
                                value={this.state.evento.descricao}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="dataEvento">Data do Evento</label>
                            <input
                                type="date"
                                className="form-control"
                                id="dataEvento"
                                name="dataEvento"
                                placeholder="dataEvento"
                                value={this.state.evento.dataEvento}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Criar 
            </button>
                    </fieldset>
                </form>
            );
        }
    }

    handleInputChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState(prevState => ({
            evento: { ...prevState.evento, [name]: value }
        }));
        console.log(value);
    };

    handleSubmit = event => {
        fetch("http://localhost:3008/sistema/evento", {
            method: "post",
            body: JSON.stringify(this.state.evento),
            headers: {
                "Content-Type": "application/json"
            }
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

export default CriarEvento;