import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class CriarUsuario extends Component {
    constructor(props) {
        super(props);

        this.state = {
            usuario: {
                id: 0,
                nome: "",
                senha: "",
                cidade: "",
                estado: ""
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

    componentDidMount() {
        const { id } = this.props.match.params;

        fetch(`http://localhost:3008/sistema/usuarios/${id}`)
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
                <form onSubmit={this.handleSubmit}>
                    {this.exibeErro()}

                    <fieldset>
                        <legend>Criar usuario</legend>
                        <div className="form-group">
                            <label htmlFor="nome">Nome</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nome"
                                name="nome"
                                placeholder="nome"
                                minLength="3"
                                maxLength="40"
                                value={this.state.usuario.nome}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="senha">Senha</label>
                            <input
                                type="password"
                                className="form-control"
                                id="senha"
                                name="senha"
                                placeholder="Senha"
                                value={this.state.usuario.senha}
                                onChange={this.handleInputChange}
                            />

                        </div>
                        <div className="form-group">
                            <label htmlFor="cidade">Cidade</label>
                            <input
                                type="text"
                                className="form-control"
                                id="cidade"
                                name="cidade"
                                placeholder="cidade"
                                value={this.state.usuario.cidade}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="estado">Estado</label>
                            <input
                                type="text"
                                className="form-control"
                                id="estado"
                                name="estado"
                                placeholder="estado"
                                minLength="2"
                                maxLength="20"
                                value={this.state.usuario.estado}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Send
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
            usuario: { ...prevState.usuario, [name]: value }
        }));
    };

    handleSubmit = event => {
        const{id}=this.state.usuario;
        fetch(`http://localhost:3008/sistema/usuarios/${id}`, {
            method: "put",
            body: JSON.stringify(this.state.usuario),
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

export default CriarUsuario;