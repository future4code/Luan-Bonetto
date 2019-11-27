import React from 'react'
import './ImageButton.css'



function ImageButton(props){
    return(
        <section id="container-ImageButton">
            { props.children }
        </section>
    )
}

export default ImageButton