import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas/";
import FormularioCadastro from "./components/FormularioCadastro/";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      notas: [],
    };
  }

  newNote(titulo, texto) {
    const criarNota = { titulo, texto };
    const novoArrayNotas = [...this.state.notas, criarNota];
    const novoEstado = {
      notas: novoArrayNotas,
    };
    this.setState(novoEstado);
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro newNote={this.newNote.bind(this)} />
        <ListaDeNotas notas={this.state.notas} />
      </section>
    );
  }
}

export default App;
