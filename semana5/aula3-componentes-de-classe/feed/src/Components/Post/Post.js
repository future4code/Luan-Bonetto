import React, {Component} from 'react';
import './Post.css';

class Post extends Component {
    constructor(props) {
       super();
       this.state = {imagemLike: "https://svgshare.com/i/GSo.svg"}
    }

    
    darLike = (e) => {
        if(this.state.imagemLike === "https://svgshare.com/i/GSo.svg"){
            this.setState({
                imagemLike: "https://svgshare.com/i/GSq.svg"
            })
        }else{
            this.setState({
                imagemLike: "https://svgshare.com/i/GSo.svg"
            })
        }
    }
    

    render() {
        return (
            <div className="container-post">
                <img className="usuario-perfil" src={this.props.imagemPerfil}></img>
                <h1 className="usuario-post">{this.props.usuario}</h1>
                <img className="imagem-post" src={this.props.imagemPost}></img>
                <img src={this.state.imagemLike} onClick={this.darLike}></img>
            </div>
        );
    }
}

export default Post