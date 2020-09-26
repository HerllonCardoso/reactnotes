import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas/";
import FormularioCadastro from "./components/FormularioCadastro/";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  constructor() {
    super();
    this.notas = [];
  }

  newNote(titulo, texto) {
    const criarNota = { titulo, texto };
    this.notas.push(criarNota);
    console.log(this.notas.length);
  }
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro newNote={this.newNote.bind(this)} />
        <ListaDeNotas notas={this.notas} />
      </section>
    );
  }
}

export default App;
