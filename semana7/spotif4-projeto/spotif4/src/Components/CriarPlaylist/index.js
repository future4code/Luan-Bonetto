import React from 'react';
import axios from 'axios';

export default class CriarPlaylist extends React.Component{

    state = {
        name: '',
    }

    aoDigitarNomeDaPlaylist = event =>{
        this.setState({ name: event.target.value })
        console.log(this.state.name)
    }

    enviarPlaylist = async event => {
        event.preventDefault(); //Essa linha cancela o comportamento default do objeto

        const playlistASerCriada = {
            name: this.state.name
        }

        const axiosConfig = {
            headers: {
                auth: "luanbonetto"
            }
        }

        await axios.post(
            `https://us-central1-spotif4.cloudfunctions.net/api/playlists/createPlaylist`,
            playlistASerCriada,
            axiosConfig
        )
        this.setState({name: ""})
    }

    render(){
        return(
            <form onSubmit={this.enviarPlaylist}>
                <h1>Criar Playlist</h1>
                <input type="text" placeholder="Digite o nome da playlist" onChange={this.aoDigitarNomeDaPlaylist}/>
                <button type="submit">Criar</button>
                <hr/>
            </form>
        )
    }
}