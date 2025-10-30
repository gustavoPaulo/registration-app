import { useState } from "react";
import { data, useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const validarLogin = () => {
    if (email.length > 0 && password.length > 0) {

      fetch('node-api/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ email, password })
      })
      .then(response => response.json())
      .then(data => {
        if (data === null) {
          alert('E-mail ou senha incorretos.');
        } else {
          navigate('/');
        }
      })
      .catch(error => console.error(error));

    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <>
      <h1>Faça seu login</h1>

      <div className="input-group-login">
        <input type="email" name="mail" id="mail" placeholder="E-mail" 
          value={email} onChange={(e) => setEmail(e.target.value)} required />

        <input type="password" name="password" id="password" placeholder="Senha"
          value={password} onChange={(e) => setPassword(e.target.value)} required />

        <button onClick={validarLogin}>Entrar</button>
      </div>
    </>
  );
}

export default LoginPage;