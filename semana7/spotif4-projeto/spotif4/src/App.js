import React from 'react';
import './App.css';
import CriarPlaylist from './Components/CriarPlaylist'
import BuscarPlaylist from './Components/BuscarPlaylist'

function App() {
  return (
    <div className="App">
      <CriarPlaylist/>
      <BuscarPlaylist/>
    </div>
  );
}

export default App;
