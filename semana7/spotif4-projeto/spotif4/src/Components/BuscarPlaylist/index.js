import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

const MainContainer = styled.form`
    display: flex;
    margin: 0 auto;
    flex-wrap: wrap;
    font-size: 18px;
`

const Form = styled.form`
    width: 100%;
    margin: 5px;
    position: relative;
    :hover h1{
        transform: translateY(-2px);
        box-shadow: 2px 2px 5px -1px rgba(0,0,0,.35);
    }
    :hover:active h1{
        transform: translateY(10px);
        box-shadow: 0px -1px 2px 0px rgba(0,0,0,.35);
    }
`

const Section = styled.section`
    width: 100%;
    margin: 5px;
    position: relative;
    :hover h1{
        transform: translateY(-2px);
        box-shadow: 2px 2px 5px -1px rgba(0,0,0,.35);
    }
    :hover:active h1{
        transform: translateY(10px);
        box-shadow: 0px -1px 2px 0px rgba(0,0,0,.35);
    }
`

const Toggle = styled.input`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 1;
    opacity: 0;
    cursor: pointer;
    height: 40px;
    :checked ~ul {
        height: 0%;
    }
`

const Titulo = styled.h1`
    border-radius: 2px;
    position: relative;
    background: tomato;
    height: 40px;
    color: ivory;
    font-weight: 200;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    box-shadow: 4px 4px 20px -2px rgba(0,0,0,.35);
    transition: all .4s;
`

const Separador = styled.ul`
    padding-left: 0;
    padding-top: 0;
    margin-top: 0;
    list-style: none;
    overflow: hidden;
    text-align: right;
    margin-bottom: 22px;
    text-align: center;
    transition: all .4s ease-out;
    height: 100%;
`

const Item = styled.li`
    border-radius: 2px;
    position: relative;
    display: inline-block;
    margin-left: 35px;
    line-height: 1.5;
    width: 100%;
    margin: 0;
    margin-bottom: 5px;
    background: tomato;
    transition: background 3s;
    box-shadow: 2px 2px 10px -2px rgba(0,0,0,.35);
    :hover {
        background: mediumorchid;
        transition: background .45s;
    }
`

const Select = styled.select`
    width: 100%;
    background: transparent;
    color: white;
    padding: 10px;
    :hover {
        background: mediumorchid;
        transition: background .45s;
    }
`

const InputText = styled.input`
    width: 100%;
    background-color: transparent;
    border: 0px;
    margin: 5px 0px;
    padding-left: 10px;
    color: white;
    text-align: center;
`

const Button = styled.button`
    width: 100%;
    background-color: transparent;
    border: 0px;
    margin: 5px 0px;
    color: white;
`

const ButtonDelete = styled.button`
    background-color: transparent;
    color: red;
    border: 0px;
    font-size: 20px;
    margin: 0 5px;
`
const ButtonMostrar = styled.button`
    background-color: transparent;
    color: blue;
    border: 0;
    margin: 0 5px;
`

const baseURL = "https://us-central1-spotif4.cloudfunctions.net/api"
const token = "luanbonetto"

export default class BuscarPlaylist extends React.Component{

    state = {
        listaPlaylist: [],
        listaMusicas: [],
        idPlaylist: '',
        nomeMusica: '',
        nomeArtista: '',
        linkMusica: '',
    }

    componentDidMount(){
        this.buscarTodasPlaylists()
    }

    componentDidUpdate(){
        this.buscarTodasPlaylists()
    }

    buscarTodasPlaylists = async () =>{
        const axiosConfig = {
            headers: {
                auth: token,
            }
        }

        const response = await axios.get(
            `${baseURL}/playlists/getAllPlaylists`,
            axiosConfig
        )

        this.setState({listaPlaylist: response.data.result.list})
    }

    deletarPlaylist = async (id) => {
        const axiosConfig = {
            headers: {
                auth: token,
            }
        }

        await axios.delete(
            `${baseURL}/playlists/deletePlaylist?playlistId=${id}`,
            axiosConfig
        ).then( () => this.deletarPlaylist )
    }

    buscarTodasMusicas = async (playlistId) => {
        const axiosConfig = {
            headers: {
                auth: token,
            }
        }

        await axios.get(
            `${baseURL}/playlists/getPlaylistMusics/${playlistId}`,
            axiosConfig
        ).then( response => this.setState({listaMusicas: response.data.result.musics}) )
    }

    aoSelecionarPlaylist = event =>{
        this.setState({idPlaylist: event.target.value})
    }

    aoDigitarNomeDaMusica = event =>{
        this.setState({nomeMusica: event.target.value})
    }

    aoDigitarNomeDoArtista = event =>{
        this.setState({nomeArtista: event.target.value})
    }

    aoDigitarLinkDaMusica = event =>{
        this.setState({linkMusica: event.target.value})
    }

    enviarMusica = async event => {
        event.preventDefault(); //Essa linha cancela o comportamento default do objeto

        
        const novaMusica = {
            playlistId: this.state.idPlaylist,
            music: {
                name: this.state.nomeMusica,
                artist: this.state.nomeArtista,
                url: this.state.linkMusica,
            }
        }

        const axiosConfig = {
            headers: {
                auth: "luanbonetto"
            }
        }

        await axios.put(
            `${baseURL}/playlists/addMusicToPlaylist`,
            novaMusica,
            axiosConfig
        )
        this.setState({playlistId: "", name: "", artist: "", url: ""})
    }

    deletarPlaylist = async (id) => {
        const axiosConfig = {
            headers: {
                auth: token,
            }
        }

        await axios.delete(
            `${baseURL}/playlists/deletePlaylist?playlistId=${id}`,
            axiosConfig
        ).then( () => this.deletarPlaylist )
    }

    render(){
        return(
            <MainContainer>

                <Section>
                    <Titulo>Ver Playlists</Titulo>
                    <Toggle type="checkbox" defaultChecked="checked" />
                    <Separador>
                        {this.state.listaPlaylist.map(playlist => 
                        <Item key={playlist.id}> {playlist.name}
                            <ButtonDelete onClick={ () => this.deletarPlaylist(playlist.id)} >x</ButtonDelete>
                            <ButtonMostrar onClick={ () => this.buscarTodasMusicas(playlist.id)}>Ver</ButtonMostrar> 
                        </Item>)}
                            
                        <Separador>
                            <Titulo>Musicas</Titulo>
                            {this.state.listaMusicas.map(musica => <div key={musica.id}><span>Nome:{musica.name}</span> <span>Artista:{musica.artist}</span> <audio controls><source src={musica.url}/></audio></div>)}
                        </Separador>
                    </Separador>
                </Section>

                <Form onSubmit={this.enviarMusica}>
                    <Titulo>Add Nova Musica</Titulo>
                    <Toggle type="checkbox" defaultChecked="checked" />
                    <Separador>
                        <Item>
                            <Select onChange={this.aoSelecionarPlaylist}>
                                <option>Selecione a Playlist</option>
                                {this.state.listaPlaylist.map(playlist => 
                                <option value={playlist.id} key={playlist.id}>{playlist.name}</option>)}
                            </Select>
                        </Item>
                        <Item>
                            <InputText type="text" placeholder="Digite o nome da musica" onChange={this.aoDigitarNomeDaMusica}/>
                        </Item>
                        <Item>
                            <InputText type="text" placeholder="Digite o nome do artista" onChange={this.aoDigitarNomeDoArtista}/>
                        </Item>
                        <Item>
                            <InputText type="text" placeholder="Digite o link da musica" onChange={this.aoDigitarLinkDaMusica}/>
                        </Item>
                        <Item>
                            <Button type="submit">Enviar</Button>
                        </Item>
                    </Separador>
                </Form>

            </MainContainer>
        )
    }
}