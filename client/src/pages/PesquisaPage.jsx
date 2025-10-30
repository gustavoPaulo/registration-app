import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import '../App.css';
import Navbar from './Navbar';

function Pesquisa() {

  const [filtro, setTexto] = useState("");
  const [responseBody, setResponseBody] = useState([]);
  const navigate = useNavigate();
  const navegarParaCadastro = () => {
    navigate("/cadastro");
  };

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
      <Navbar />

      <div>
        <h1>Pesquisa de Pessoas</h1>
        <input type="text" value={filtro} onChange={(filtro) => 
          setTexto(filtro.target.value)} placeholder="Pesquise por nome"/>

        <div className="btn-pesquisa-page">
          <button onClick={pesquisarPessoas}>Pesquisar</button>
          <button onClick={navegarParaCadastro}>Cadastrar</button>
        </div>

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

export default Pesquisa;