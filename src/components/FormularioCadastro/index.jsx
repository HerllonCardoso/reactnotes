import React, { Component } from "react";
import "./style.css";

class FormularioCadastro extends Component {
  constructor() {
    super();
    this.titulo = "";
  }
  handleTitleSwap(event) {
    this.titulo = event.target.value;
    console.log(this.titulo);
  }

  render() {
    return (
      <form className="form-cadastro">
        <input
          type="text"
          placeholder="Titulo"
          className="form-cadastro_input"
          onChange={this.handleTitleSwap.bind(this)}
        />
        <textarea
          rows={15}
          className="form-cadastro_input"
          placeholder="Tem algo que precise guardar?"
        ></textarea>
        <button className="form-cadastro_input form-cadastro_submit">
          Criar nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
