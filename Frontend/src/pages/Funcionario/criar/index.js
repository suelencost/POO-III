import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class CriarFuncionario extends Component {
  constructor(props) {
    super(props);

    this.state = {
      funcionario: {
        nome: "",
        matricula: "",
        cpf: "",
        dataNascimento:"",
        cpf: "",
        email:"",
        idProjeto: ""
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
            <legend>Criar funcionario</legend>
            <div className="form-group">
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                className="form-control"
                id="nome"
                name="nome"
                placeholder="nome"
                minLength="2"
                maxLength="40"
                value={this.state.funcionario.nome}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="matricula">Matricula</label>
              <input
                type="text"
                className="form-control"
                id="matricula"
                name="matricula"
                aria-describedby="valueAjuda"
                placeholder="Matricula"
                value={this.state.funcionario.matricula}
                onChange={this.handleInputChange}
              />
              
            </div>
            <div className="form-group">
              <label htmlFor="dataNascimento">Data de Nascimento</label>
              <input
                type="date"
                className="form-control"
                id="dataNascimento"
                name="dataNascimento"
                placeholder="dataNascimento"
                value={this.state.funcionario.dataNascimento}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="cpf">CPF</label>
              <input
                type="text"
                className="form-control"
                id="cpf"
                name="cpf"
                placeholder="cpf"
                minLength="2"
                maxLength="40"
                value={this.state.funcionario.cpf}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                placeholder="email"
                minLength="2"
                maxLength="40"
                value={this.state.funcionario.email}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="salario">Salario</label>
              <input
                type="text"
                className="form-control"
                id="salario"
                name="salario"
                placeholder="salario"
                minLength="2"
                maxLength="40"
                value={this.state.funcionario.salario}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="idProjeto">Projeto</label>
              <input
                type="number"
                className="form-control"
                id="idProjeto"
                name="idProjeto"
                placeholder="idProjeto"
                min="1"
                value={this.state.funcionario.idProjeto}
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
      funcionario: { ...prevState.funcionario, [name]: value }
    }));
  };

  handleSubmit = event => {
    fetch("http://localhost:3008/sistema/funcionarios", {
      method: "post",
      body: JSON.stringify(this.state.funcionario),
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

export default CriarFuncionario;
