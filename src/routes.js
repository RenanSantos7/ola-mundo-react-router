import Inicio from './paginas/Inicio';
import SobreMim from './paginas/SobreMim';
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
        <Route path='/' element={<PaginaPadrao/>}>
          {/* <Route path="/" element={<Inicio />} /> */}
          <Route index element={<Inicio />} />
          {/* <Route path="/sobre-mim" element={<SobreMim />} /> */}
          <Route path="sobre-mim" element={<SobreMim />} />
        </Route>
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
