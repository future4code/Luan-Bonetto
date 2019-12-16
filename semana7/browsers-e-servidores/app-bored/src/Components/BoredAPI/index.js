import React from 'react';
import axios from 'axios';

const baseURL = "http://www.boredapi.com/api/activity"
let typeSelected = ""
let qtdSelected = 0

class BoredAPI extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            currentActivity: {},
            typeActivity: "",
            qtdActivity: 0,
            storedActivity: {},
        }
    }

    componentDidMount(){
        // this.getRandomActivity()
    }

    getRandomActivity = async () => {
        const response = await axios.get(baseURL)
        this.setState({ currentActivity: response.data })
    }

    buscarAtividade = async () =>{
        const response = await axios.get(baseURL)
        this.setState({typeActivity: response.data.type})
        this.setState({qtdActivity: response.data.participants})
        console.log(this.state.typeActivity, this.state.qtdActivity)

        if (this.state.typeActivity === typeSelected){
            this.setState({ storedActivity: response.data })
        }else{
            this.buscarAtividade()
        }
    }

    selectType = (event) => {
        typeSelected = event.target.value
        console.log(typeSelected)
    }

    selectQtd = (event) => {
        qtdSelected = event.target.value
        console.log(qtdSelected)
    }
    render(){
        return (
        <div>



            <select onChange={this.selectType}>
                <option>Selecione o Tipo de Atividade</option>
                <option>education</option>
                <option>recreational</option>
                <option>social</option>
                <option>diy</option>
                <option>charity</option>
                <option>cooking</option>
                <option>relaxation</option>
                <option>music</option>
                <option>busywork</option>
            </select>

            <select onChange={this.selectQtd}>
                <option>Selecione a Quantidade de Pessoas</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>

            <button onClick={this.buscarAtividade}>Sortear</button>

            <h1>{this.state.storedActivity.activity}</h1>
        </div>
        )
    }
}

export default BoredAPI