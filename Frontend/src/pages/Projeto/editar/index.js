import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class EditarProjeto extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projeto: {
        nome: "",
        area: "",
        descricao: "",
        dataCriacao:"",
        dataValidade: ""
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
        <form onSubmit={this.handleSubmit}>
          {this.exibeErro()}

          
          <fieldset>
            <legend>Criar projeto</legend>
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
                value={this.state.projeto.nome}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="area">Area</label>
              <input
                type="text"
                className="form-control"
                id="area"
                name="area"
                aria-describedby="valueAjuda"
                placeholder="area"
                value={this.state.projeto.area}
                onChange={this.handleInputChange}
              />
              
            </div>
            <div className="form-group">
              <label htmlFor="descricao">Descricao</label>
              <input
                type="text"
                className="form-control"
                id="descricao"
                name="descricao"
                placeholder="descricao"
                value={this.state.projeto.descricao}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="dataCriacao">Data de Criação</label>
              <input
                type="text"
                className="form-control"
                id="dataCriacao"
                name="dataCriacao"
                placeholder="dataCriacao"
                minLength="2"
                maxLength="40"
                value={this.state.projeto.dataCriacao}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="dataValidade">Data de Validade</label>
              <input
                type="text"
                className="form-control"
                id="dataValidade"
                name="dataValidade"
                placeholder="dataValidade"
                minLength="2"
                maxLength="40"
                value={this.state.projeto.dataValidade}
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
        projeto: { ...prevState.projeto, [name]: value }
    }));
  };

  handleSubmit = event => {
    const { id } = this.state.projeto;

    fetch(`http://localhost:3008/sistema/projetos/${id}`, {
      method: "put",
      body: JSON.stringify(this.state.projeto),
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

export default EditarProjeto;
