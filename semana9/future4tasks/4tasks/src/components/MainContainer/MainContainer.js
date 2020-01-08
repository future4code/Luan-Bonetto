import React from 'react';
import style from 'styled-components';
import InputTask from '../InputTask/InputTask'
import CheckboxTask from '../CheckboxTask/CheckboxTask'

const Main = style.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

function MainContainer() {
    return(
        <Main>
            <InputTask />
            <CheckboxTask/>
        </Main>
    )
}

export default MainContainer