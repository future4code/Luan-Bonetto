import React from 'react';
import style from 'styled-components'
import MainContainer from './components/MainContainer/MainContainer'

const Title = style.h1`
  text-align: center;
  top: -140px;
  width: 100%;
  font-size: 80px;
  font-weight: 200;
  text-align: center;
  color: #b83f45;
`


function App() {
  return (
    <div>
      <Title>4Task</Title>
      <MainContainer/>
    </div>
  );
}

export default App;
