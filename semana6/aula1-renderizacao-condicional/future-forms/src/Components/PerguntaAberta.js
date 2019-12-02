import React from 'react';

function PerguntaAberta(props){
    return(
        <section>
            <h3>{props.pergunta}</h3>
            <input type="text"></input>
        </section>
    )
}

export default PerguntaAberta