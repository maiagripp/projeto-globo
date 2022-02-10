// import http from "../http/index";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardPost from "../../components/CardPost";
import { Link } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams();
  const [postDetail, setPostDetail] = useState({});

  //   useEffect(() => {
  //     http.get("postDetail/" + id).then((response) => setPostDetail(response.data));
  //   }, [id]);

  return (
    <div className="detalhes">
      <CardPost
        id={postDetail.id}
        title={postDetail.title}
        text={postDetail.text}
      />
      <Link to={`/posts/`}>
        <button className="btn-voltar"> Voltar</button>
      </Link>
    </div>
  );
};

export default Servico;
