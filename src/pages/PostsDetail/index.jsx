import http from "../../http/index";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardPost from "../../components/CardPost";
import { Link } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    http.get("posts/" + id).then((response) => setPost(response.data));
  }, [id]);

  return (
    <div className="detalhes">
      <CardPost id={post.id} title={post.title} text={post.text} />
      <Link to={`/posts/`}>
        <button className="btn-voltar"> Voltar</button>
      </Link>
    </div>
  );
};

export default PostDetail;
