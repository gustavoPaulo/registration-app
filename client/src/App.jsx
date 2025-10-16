import { useState } from 'react';
import './App.css'

function App() {

  const [responseBody, setResponseBody] = useState([]);

  const pesquisarPessoas = () => {
    fetch('node-api/pessoas')
      .then((res) => res.json())
      .then((data) => setResponseBody(data))
      .catch((error) => console.error('Erro ao buscar pessoas:', error));
  };

  return (
    <>
      <div>
        <h1>Lista de Pessoas</h1>        
        <button onClick={pesquisarPessoas}>Pesquisar</button>
        <ul>
          {responseBody.map((pessoa, index) => (
            <li key={index}>
              Nome: {pessoa.nome} - E-mail: {pessoa.email} - Idade: {pessoa.idade}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
