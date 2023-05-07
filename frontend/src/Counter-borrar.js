import React, { useState } from 'react';

//Componentes = e uma estrutura de codigo que retorna um html, css ou js

//Propriedades = Sao informacoes que um componente PAI passa para um componente filho

//Estados = funcao que armazena uma informacao e manipula



function App() {
  const [counter, setCounter] = useState(0)

function handleSoma(){
  setCounter(counter + 1)
}

function handleMenos(){
  setCounter(counter - 1)
}

  return (
    <>
<h1>{counter}</h1>
<button onClick={handleMenos}>-</button>
<button onClick={handleSoma}>+</button>
</>
  );
}

export default App;
