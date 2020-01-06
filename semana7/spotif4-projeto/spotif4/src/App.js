import React from 'react';
import './App.css';
import CriarPlaylist from './Components/CriarPlaylist'
import BuscarPlaylist from './Components/BuscarPlaylist'
import styled from 'styled-components'

const MainContainer = styled.div`
  display: flex;
  margin: 0 5px;
  flex-wrap: wrap;
`

function App() {
  return (
    <MainContainer>
      <CriarPlaylist/>
      <BuscarPlaylist/>
    </MainContainer>
  );
}

export default App;
