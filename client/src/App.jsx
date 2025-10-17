import { useState } from 'react';
import './App.css'

function App() {

  const [filtro, setTexto] = useState("");
  const [responseBody, setResponseBody] = useState([]);

  const pesquisarPessoas = () => {
    if (filtro.length > 0) {
      fetch('node-api/pessoas/' + filtro, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ filtro })
      })
        .then((res) => res.json())
        .then((data) => setResponseBody(data))
        .catch((error) => console.error('Erro ao buscar pessoas:', error));

    } else {
      fetch('node-api/pessoas')
        .then((res) => res.json())
        .then((data) => setResponseBody(data))
        .catch((error) => console.error('Erro ao buscar pessoas:', error));
    }
  };

  return (
    <>
      <div>
        <h1>Lista de Pessoas</h1>
        <input type="text" value={filtro} onChange={(filtro) => setTexto(filtro.target.value)} placeholder="Pesquise por nome"/>

        <br />
        <br />

        <button onClick={pesquisarPessoas}>Pesquisar</button>

        <br />
        <br />

        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Idade</th>
            </tr>
          </thead>
          <tbody>
            {responseBody.length > 0 ? (
              responseBody.map((pessoa) => (
              <tr key={pessoa.id}>
                <td>{pessoa.nome}</td>
                <td>{pessoa.email}</td>
                <td>{pessoa.idade}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" style={{ textAlign: "center" }}>
                  Nenhum registro encontrado.
                </td>
            </tr>
          )}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
