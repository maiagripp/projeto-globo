import "./styles.css";
import { useState } from "react";
//import http from "../http/index";

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const nameHandler = (event) => {
    setNome(event.target.value);
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const senhaHandler = (event) => {
    setSenha(event.target.value);
  };

  const efetuarCadastro = (event) => {
    event.preventdefault();
    const usuario = {
      nome: nome,
      email: email,
      senha: senha,
    };

    // http
    //   .post("auth/register", usuario)
    //   .then((response) => {
    //     console.log(response.data);
    //     localStorage.setItem("token", response.data.access_token);
    //   })
    //   .catch((erro) => {
    //     console.log(erro);
    //   });
  };

  return (
    <div>
      <form onSubmit={efetuarCadastro}>
        <div>
          <label>Nome</label>
          <input type="text" value={nome} onChange={nameHandler} required />
        </div>
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
        <button className="btn-form">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
