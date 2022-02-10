import http from "../../http";
import "./styles.css";
import CardPost from "../../components/CardPost";

import { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    http.get("posts").then((response) => setPosts(response.data));
  }, []);

  return (
    <div className="posts">
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
