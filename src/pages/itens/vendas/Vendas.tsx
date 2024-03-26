import { useState } from "react";
import { IProduto, IValorTotal } from "interface/IProduto";
import InputVendas from "./venda/InputVenda";
import ListaVendas from "./listaVendas/ListaVendas";
import ValorCompras from "./valorCompras/ValorCompras";

export default function Vendas() {
  const [produtosSelecionados, setProdutosSelecionados] = useState<
    IValorTotal[]
  >([]);

  const somaTotal = produtosSelecionados.reduce(
    (total, produto) => total + (produto.valorTotal || 0),
    0
  );

  const adicionarProduto = (produto: IProduto) => {
    const novoProduto = { ...produto };
    setProdutosSelecionados([...produtosSelecionados, novoProduto]);
    console.log(produtosSelecionados);
  };

  return (
    <main>
      <InputVendas adicionarProduto={adicionarProduto} />
      <ListaVendas produtos={produtosSelecionados} />
      <ValorCompras valorTotal={somaTotal} />
    </main>
  );
}
