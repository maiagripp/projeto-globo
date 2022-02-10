import "./styles.css";
import { useState } from "react";
import http from "../../http";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const textHandler = (event) => {
    setText(event.target.value);
  };

  const post = (event) => {
    event.preventdefault();
    const post = {
      title: title,
      text: text,
    };

    http
      .post("posts", post)
      .then((response) => {
        console.log(response.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  return (
    <form onSubmit={post}>
      <div>
        <label>Título</label>
        <input type="text" value={title} onChange={titleHandler} required />
      </div>
      <div className="textarea">
        <label>Post</label>
        <textarea value={text} onChange={textHandler} rows={10} required />
      </div>
      <button className="btn-form">Postar</button>
    </form>
  );
};

export default CreatePost;
