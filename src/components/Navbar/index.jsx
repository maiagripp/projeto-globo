import { Link } from "react-router-dom";
import "./styles.css";
import logo from "../../assets/images/logo.svg";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <img className="logo" src={logo} alt="logo" />
          </Link>
        </li>
        <li>
          <Link to="/servicos">Criar Post</Link>
        </li>
        <li>
          <Link to="/cadastro">Cadastre-se</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
