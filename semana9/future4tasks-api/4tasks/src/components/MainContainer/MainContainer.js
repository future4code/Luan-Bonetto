import React from 'react';
import style from 'styled-components';
import InputTask from '../InputTask/InputTask'
import CheckboxTaskList from '../CheckboxTask/CheckboxTaskList'

const Main = style.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

class MainContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }


    render(){
        return(
            <Main>
                <InputTask />
                <CheckboxTaskList />
            </Main>
        )
}
}

export default MainContainer