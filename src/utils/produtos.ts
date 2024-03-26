import { useState } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { IValorTotal } from "interface/IProduto";


export const useProdutos = () => {
  const [produtosSelecionados, setProdutosSelecionados] = useState<IValorTotal[]>([]);
  const [listaVendas, setListaVendas] = useState<IValorTotal[]>([]);

  const data = new Date();
  const dataFormat = format(data, "dd 'de' MMMM 'de' yyyy", { locale: ptBR });

  const somaTotal = produtosSelecionados.reduce(
    (total, produto) => total + (produto.valorTotal || 0),
    0
  );

  function adicionarProduto(produto: IValorTotal) {
    const novoProduto = { ...produto };
    setProdutosSelecionados([...produtosSelecionados, novoProduto]);
  }

  function adicionarLista(listaVenda: IValorTotal) {
    const novaListaVenda = { ...listaVenda, date: dataFormat };
    setListaVendas([...listaVendas, novaListaVenda]);
    console.table(listaVendas);
  }

  return { produtosSelecionados, setProdutosSelecionados, somaTotal, adicionarProduto, adicionarLista, listaVendas, setListaVendas };
};
