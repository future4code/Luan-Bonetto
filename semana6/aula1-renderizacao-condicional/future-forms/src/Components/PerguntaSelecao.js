import React from 'react';

function PerguntaSelecao(props){
    return(
        <section>
            <h3>{props.pergunta}</h3>
            <select>
                {props.opcoes.map(opcao =>(
                    <option value={opcao}>{opcao}</option>
                ))}
            </select>
        </section>
    )
}

export default PerguntaSelecao