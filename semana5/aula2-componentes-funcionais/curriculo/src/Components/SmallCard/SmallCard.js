import React from 'react'
import './SmallCard.css'



function SmallCard(props){
    return(
        <section id="container-SmallCard">
            { props.children }
        </section>
    )
}

export default SmallCard