import "./styles.css";

import PostList from "../PostList";

const Home = () => {
  return (
    <div className="home">
      <h1>Blog</h1>
      <PostList />
    </div>
  );
};

export default Home;
