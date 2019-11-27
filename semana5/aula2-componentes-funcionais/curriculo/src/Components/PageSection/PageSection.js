import React from 'react'
import './PageSection.css'
import BigCard from '../BigCard/BigCard'
import SmallCard from '../SmallCard/SmallCard';
import ImageButton from '../ImageButton/ImageButton'

function Titulo(props){
    return <h1 className="titulo">{props.titulo}</h1>
}

function Titulo2(props){
    return <h2>{props.titulo2}</h2>
}

function Paragrafo(props){
    return <p>{props.paragrafo}</p>
}

function Imagem(props){
    return <img className="Imagem-BigCard" src={ props.imagem } />
}

function Imagem1(props){
    return <img className="Imagem-SmallCard" src={props.imagem} />
}

function Titulo3(props){
    return <h3>{props.titulo}</h3>
}

function PageSection(){
    return(
        <section id="Container">
            <Titulo titulo="Dados Pessoais"/>
            <BigCard>
                <Titulo2 titulo2="Luan Bonetto" />
                <Imagem imagem="https://avatars3.githubusercontent.com/u/41657072?s=460&v=4" />
                <Paragrafo paragrafo="Olá, me chamo Luan. Sou Técnico em Redes de Computadores. Atualmente cursando Desenvolvimento Web Full Stack na Future4, e adorando aprender React!" />
            </BigCard>

            <SmallCard>
                <Imagem1 imagem="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-email-512.png" />
                <Titulo3 titulo="Email:" />
                <Paragrafo paragrafo="luanbonetto42@gmail.com" />
            </SmallCard>

            <SmallCard>
                <Imagem1 imagem="http://pluspng.com/img-png/home-icon-png-home-house-icon-image-202-512.png" />
                <Titulo3 titulo="Endereço:" />
                <Paragrafo paragrafo="Rua U" />
            </SmallCard>

            <ImageButton>
                <Titulo3 titulo="Ver Mais"/>
            </ImageButton>

            <Titulo titulo="Experiências Profissionais"/>
            <BigCard>
                <Titulo2 titulo2="Future4" />
                <Imagem imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png" />
                <Paragrafo paragrafo="formando Desenvolvedores para o futuro!" />

                <Titulo2 titulo2="PUC-Campinas" />
                <Imagem imagem="https://www.puc-campinas.edu.br/wp-content/uploads/2016/03/cropped-favicon-300x300.png" />
                <Paragrafo paragrafo="Gestão da Tecnologia da Informação" />
            </BigCard>

            <Titulo titulo="Minhas Redes Sociais"/>
            <ImageButton>
                <Titulo3 titulo="Facebook"/>
            </ImageButton>
        </section>
    )
}



export default PageSection