import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "../src/components/Navbar";
import Home from "../src/pages/Home";
import Register from "../src/pages/Register";
import Login from "../src/pages/Login";
import CreatePost from "../src/pages/CreatePost";
import Posts from "../src/pages/Posts";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/posts/" element={<Posts />} />
            <Route path="/posts/:id" element={<Posts />} />
            {/* <Route path="/cadastro">
              <Cadastro />
            </Route>
            <Route path="/login">
              <Login />
            </Route> */}
            {/* <Route exact path="/produtos">
            <Produtos />
          </Route>
          <Route path="/produtos/:id">
            <Produto />
          </Route>
          <Route exact path="/servicos">
            <Servicos />
          </Route>
          <Route path="/servicos/:id">
            <Servico />
          </Route> */}
            {/* <Route>
            <Pagina404 />
          </Route> */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
