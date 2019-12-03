import React from 'react';
import PerguntaSelecao from './PerguntaSelecao'
import PerguntaAberta from './PerguntaAberta'


class Etapa1 extends React.Component {
    render() {
      return (
        <section>
          <h1>Dados Gerais</h1>
          <PerguntaAberta pergunta={"1. Qual o seu nome?"} />
          <PerguntaAberta pergunta={"2. Qual sua idade?"} />
          <PerguntaAberta pergunta={"3. Qual seu email?"} />
          <PerguntaSelecao
            pergunta={"4. Qual a sua escolaridade?"}
            opcoes={[
              "Ensino médio incompleto",
              "Ensino médio completo",
              "Ensino superior incompleto",
              "Ensino superior completo"
            ]}
          />
        </section>
      );
    }
}

export default Etapa1