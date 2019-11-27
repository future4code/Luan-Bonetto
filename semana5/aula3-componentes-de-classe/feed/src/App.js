import React from 'react';
import './App.css';
import Post from './Components/Post/Post'

function App() {
  return (
    <div>
      <Post 
        usuario='luanbonetto' 
        imagemPerfil='https://avatars3.githubusercontent.com/u/41657072?s=460&v=4'
        imagemPost='https://i.pinimg.com/originals/2b/74/db/2b74dbae3404bd472f384e88f7e11056.jpg'
      />

      <Post 
        usuario='luanbonetto' 
        imagemPerfil='https://avatars3.githubusercontent.com/u/41657072?s=460&v=4'
        imagemPost='https://4.bp.blogspot.com/-JDUwjqvVSeM/W61VqJP54yI/AAAAAAAAQTw/1pCYu-0InT8Xn2cW1fL82SB-gVFATLCNwCLcBGAs/s2560/artre-digital-paisagem.jpg'
      />

      <Post 
        usuario='luanbonetto' 
        imagemPerfil='https://avatars3.githubusercontent.com/u/41657072?s=460&v=4'
        imagemPost='https://images5.alphacoders.com/552/552634.jpg'
      />
    </div>
  );
}

export default App;
