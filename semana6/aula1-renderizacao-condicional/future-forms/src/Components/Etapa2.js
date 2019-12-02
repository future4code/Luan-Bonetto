import React from "react";
import PerguntaAberta from "./PerguntaAberta";

class Etapa2 extends React.Component {
  render() {
    return (
      <section>
        <h1>Informações do Ensino Superior</h1>
        <PerguntaAberta pergunta={"5. Qual curso?"} />
        <PerguntaAberta pergunta={"6. Qual a unidade de ensino?"} />
      </section>
    );
  }
}

export default Etapa2;