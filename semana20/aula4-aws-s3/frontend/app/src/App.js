import React from 'react';

function App() {
  return (
    <div>
      <h4>Olá! Bora fazer uploads 😉</h4>
      <form
        action="https://wfdo9ou1yl.execute-api.us-east-1.amazonaws.com/v4/uploadFile"
        method="POST"
        enctype="multipart/form-data"
      >
        <input name="arquivo" type="file" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
