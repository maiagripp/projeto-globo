import "./style.css";
import { Link } from "react-router-dom";

const CardProduto = ({ nome, preco, id }) => {
  return (
    <div className="cardTodos">
      <h3>{nome}</h3>
      <p>R$ {preco}</p>
      <Link to={`/produtos/${id}`}>Ver detalhes</Link>
    </div>
  );
};

export default CardProduto;
