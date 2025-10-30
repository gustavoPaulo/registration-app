import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import '../App.css';
import Navbar from './Navbar';

function Cadastro() {

  const navigate = useNavigate();
  const navegarParaCadastro = () => {
    navigate("/pesquisa");
  };

  return (
    <>
        <Navbar />
        <button onClick={navegarParaCadastro}>Voltar para pesquisa</button>
    </>
  )
}

export default Cadastro;