import Inicio from './paginas/Inicio';
import SobreMim from './paginas/SobreMim';
import Post from 'paginas/Post/Post';
import Contato from "./paginas/Contato";

import Menu from "./components/Menu/Menu";
import Footer from 'components/Footer/Footer';
import PaginaPadrao from 'components/PaginaPadrão';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        
        <Route path='/' element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobre-mim" element={<SobreMim />} />
          <Route path="posts/:id" element={<Post />} />
        </Route>
        
        <Route path="/contato" element={<Contato />} />
        
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
