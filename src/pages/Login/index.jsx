import "./styles.css";
import { useState } from "react";
import http from "../../http/index";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const senhaHandler = (event) => {
    setSenha(event.target.value);
  };

  const efetuarLogin = (event) => {
    event.preventdefault();
    const usuario = {
      email: email,
      senha: senha,
    };

    http
      .post("auth/login", usuario)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("token", response.data.access_token);
        localStorage.setItem("nome", response.data.user.nome);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  return (
    <form onSubmit={efetuarLogin}>
      <div>
        <label>Email</label>
        <input type="email" value={email} onChange={emailHandler} required />
      </div>
      <div>
        <label>Senha</label>
        <input
          type="password"
          value={senha}
          onChange={senhaHandler}
          minLength="4"
          required
        />
      </div>
      <button className="btn-form">Entrar</button>
    </form>
  );
};

export default Login;
