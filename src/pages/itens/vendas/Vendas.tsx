import { useState } from "react";
import { IProduto } from "interface/IProduto";
import InputVendas from "./venda/InputVenda";
import ListaVendas from "./listaVendas/ListaVendas";


export default function Vendas() {

  const [produtosSelecionados, setProdutosSelecionados] = useState<IProduto[]>([]);

  const adicionarProduto = (produto: IProduto) => {
    const novoProduto = { ...produto };
    setProdutosSelecionados([...produtosSelecionados, novoProduto]);
    console.table(novoProduto);
    console.log(produtosSelecionados);
  };


  return (
    <main>
      <InputVendas adicionarProduto={adicionarProduto} />
      <ListaVendas />
    </main>
  );
}