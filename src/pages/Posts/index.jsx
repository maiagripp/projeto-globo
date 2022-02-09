// import http from '../http';
import CardPost from "../../components/CardPost";
import "./styles.css";

import { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  //   useEffect(() => {
  //     http.get("posts").then((response) => setPosts(response.data));
  //   }, []);

  return (
    <div className="posts">
      <h1 className="posts-title">Posts</h1>
      <ul>
        {posts.map((post) => (
          <CardPost
            key={post.id}
            id={post.id}
            title={post.title}
            text={post.text}
          />
        ))}
      </ul>
    </div>
  );
};

export default Posts;
