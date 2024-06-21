import produto from "img/caixa.svg";
import clientes from "img/users-round.svg";
import compras from "img/cesta.svg";
import fornecedor from "img/truck.svg";
import vendas from "img/sifrao.svg";
import caixa from "img/nota_dolar.svg";

const rotasMenu = [
  {
    label: "Produto",
    to: "/home/produto",
    img: produto,
  },
  {
    label: "Cliente",
    to: "/home/cliente",
    img: clientes,
  },
  {
    label: "Fornecedor",
    to: "/home/fornecedor",
    img: fornecedor,
  },
  {
    label: "Vendas",
    to: "/home/vendas",
    img: vendas,
  },
  {
    label: "Caixa",
    to: "/home/caixa",
    img: caixa,
  },
  {
    label: "Compras",
    to: "/home/compras",
    img: compras,
  },
];

export default rotasMenu;
