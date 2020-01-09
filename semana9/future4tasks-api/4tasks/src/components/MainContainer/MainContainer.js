import React from 'react';
import style from 'styled-components';
import InputTask from '../InputTask/InputTask'
import CheckboxTaskList from '../CheckboxTask/CheckboxTaskList'

const Main = style.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const tasks = [
    {
        id: 1,
        done: false,
        text: "teste"
    },
    {
        id: 2,
        done: true,
        text: "teste1"
    },
    {
        id: 3,
        done: true,
        text: "teste1"
    }
]

class MainContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }


    render(){
        return(
            <Main>
                <InputTask />
                <CheckboxTaskList CheckboxTaskList={tasks}/>
            </Main>
        )
}
}

export default MainContainer