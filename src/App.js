import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "../src/components/Navbar";
import Home from "../src/pages/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
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
