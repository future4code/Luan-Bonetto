import React from 'react';
import './App.css';

function App() {
  return (
    <div>

      <header>
        <h1>FutureTube4</h1>
        <input type="text" placeholder="Busca" className="campo-busca"></input>
      </header>

      <section id="main-container">
        
        <section id="menu">
          <nav>
            <ul>
              <li>Inicio</li>
              <li>Em Alta</li>
              <li>Inscrições</li>
              <li>Originais</li>
              <li id="li-biblioteca">Biblioteca</li>
              <li>Histórico</li>
            </ul>
          </nav>
        </section>

        <section id="videos">
            
            <div className="item-video">
              <img src={require('./imagens/rosas.jpg')} />
              <h2>Rosas</h2>
            </div>

            <div className="item-video">
              <img src={require('./imagens/falcon.jpg')} />
              <h2>Millenium Falcon</h2>
            </div>

            <div className="item-video">
              <img src={require('./imagens/estrada.jpg')} />
              <h2>Estrada</h2>
            </div>

            <div className="item-video">
              <img src={require('./imagens/criança.jpg')} />
              <h2>Criança</h2>
            </div>

            <div className="item-video">
              <img src={require('./imagens/carro.jpg')} />
              <h2>Carro</h2>
            </div>

            <div className="item-video">
              <img src={require('./imagens/wallpaper1.jpg')} />
              <h2>Planeta</h2>
            </div>

            <div className="item-video">
              <img src={require('./imagens/cachorro.jpg')} />
              <h2>Cachorro</h2>
            </div>

            <div className="item-video">
              <img src={require('./imagens/sistemasolar.jpg')} />
              <h2>Sistema Solar</h2>
            </div>

        </section>

      </section>

      <footer>
        <h3>Oi, eu moro no footer!</h3>
      </footer>

    </div>
  );
}

export default App;
