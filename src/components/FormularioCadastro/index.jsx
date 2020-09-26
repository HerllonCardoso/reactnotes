import React, { Component } from "react";
import "./style.css";

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
    this.categoria = "Sem categoria";
  }
  _handleMudancaCategoria(event) {
    event.stopPropagation();
    this.categoria = event.target.value;
  }

  _handleTitleSwap(event) {
    event.stopPropagation();
    this.titulo = event.target.value;
  }
  _handleTextSwap(event) {
    event.stopPropagation();
    this.texto = event.target.value;
  }
  _createNote(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.newNote(this.titulo, this.texto, this.categoria);
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this._createNote.bind(this)}>
        <select
          onChange={this._handleMudancaCategoria.bind(this)}
          className="form-cadastro_input"
        >
          <option>Sem Categoria</option>

          {this.props.categorias.map((categoria) => {
            return <option>{categoria} </option>;
          })}
        </select>
        <input
          type="text"
          placeholder="Titulo"
          className="form-cadastro_input"
          onChange={this._handleTitleSwap.bind(this)}
        />
        <textarea
          rows={15}
          className="form-cadastro_input"
          placeholder="Tem algo que precise guardar?"
          onChange={this._handleTextSwap.bind(this)}
        ></textarea>
        <button className="form-cadastro_input form-cadastro_submit">
          Criar nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
