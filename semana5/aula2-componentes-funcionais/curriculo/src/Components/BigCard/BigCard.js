import React from 'react'
import './BigCard.css'



function BigCard(props){
    return(
        <section id="container-BigCard">
            { props.children }
        </section>
    )
}

export default BigCard
