import "./style.css";
import { Link } from "react-router-dom";

const CardPost = ({ title, text, id }) => {
  return (
    <div className="cardPost">
      <h3>{title}</h3>
      <p>{text}</p>
      <Link to={`/posts/${id}`}>Ver mais</Link>
    </div>
  );
};

export default CardPost;
