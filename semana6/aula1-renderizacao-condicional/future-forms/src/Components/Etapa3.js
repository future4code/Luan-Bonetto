import React from "react";
import PerguntaAberta from "./PerguntaAberta";
import PerguntaSelecao from "./PerguntaSelecao";

class Etapa3 extends React.Component {
  render() {
    return (
      <section>
        <h1>Informações Gerais de Ensino</h1>
        <PerguntaAberta
          pergunta={"5. Por que você não terminou um curso de graduação?"}
        />
        <PerguntaSelecao
          pergunta={"6. Você fez algum curso complementar?"}
          opcoes={[
                "Nenhum",
                "Curso técnico",
                "Curso de inglês"
        ]}
        />
      </section>
    );
  }
}

export default Etapa3;
