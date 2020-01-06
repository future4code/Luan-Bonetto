import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

const FormNovaPlaylist = styled.form`
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

const TituloForm = styled.h1`
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

const InputText = styled.input`
    text-align: center;
    width: 100%;
    background-color: transparent;
    border: 0px;
    margin: 5px 0px;
    color: white;
`

const Button = styled.button`
    width: 100%;
    background-color: transparent;
    border: 0px;
    margin: 5px 0px;
    color: white;
`

export default class CriarPlaylist extends React.Component{

    state = {
        name: '',
    }

    aoDigitarNomeDaPlaylist = event =>{
        this.setState({ name: event.target.value })
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
            <FormNovaPlaylist onSubmit={this.enviarPlaylist}>
                <TituloForm>Criar Playlist</TituloForm>
                <Toggle type="checkbox" defaultChecked="checked" />
                <Separador>
                    <Item> <InputText type="text" placeholder="Digite o nome da playlist" onChange={this.aoDigitarNomeDaPlaylist}/> </Item>
                    <Item> <Button type="submit">Criar</Button> </Item>
                </Separador>
            </FormNovaPlaylist>
        )
    }
}