import Menu from "components/menu/Menu";
import Dashboard from "pages/dashboard/Dashboard";
import Cliente from "pages/itens/cliente/Cliente";
import Fornecedor from "pages/itens/fornecedor/Fornecedor";
import Produto from "pages/itens/produto/Produto";
import PaginaPadrao from "pages/paginaPadrao/PaginaPadrao";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Vendas from "pages/itens/vendas/Vendas";
import Compras from "pages/itens/compras/Compras";
import Caixa from "pages/itens/caixa/Caixa";
import Inicio from "pages/inicio/Inicio";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/home" element={<Menu />}>
            <Route path="produto" element={<Produto />} />
            <Route path="cliente" element={<Cliente />} />
            <Route path="fornecedor" element={<Fornecedor />} />
            <Route path="vendas" element={<Vendas />} />
            <Route path="caixa" element={<Caixa />} />
            <Route path="compras" element={<Compras />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
