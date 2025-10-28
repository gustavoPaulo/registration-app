import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Navbar";
import Pesquisa from "../pages/Pesquisa";
import Cadastro from "../pages/Cadastro";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pesquisa" element={<Pesquisa />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
}
