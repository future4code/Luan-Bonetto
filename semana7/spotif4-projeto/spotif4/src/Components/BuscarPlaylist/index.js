import React from 'react';
import axios from 'axios';

const baseURL = "https://us-central1-spotif4.cloudfunctions.net/api"

export default class BuscarPlaylist extends React.Component{

    state = {
        listaPlaylist: []
    }

    componentDidMount(){
        this.buscaTodasPlaylists()
    }

    buscaTodasPlaylists = async () =>{
        const axiosConfig = {
            headers: {
                auth: "luanbonetto"
            }
        }

        const response = await axios.get(
            `${baseURL}/playlists/getAllPlaylists`,
            axiosConfig
        )

        this.setState({listaPlaylist: response.data.result})
        console.log(this.state.listaPlaylist)
    }

    render(){
        return(
            <ul>
                
            </ul>
        )
    }
}