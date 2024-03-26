import styles from "./vendas.module.css";
import InputVendas from "./inputVendas/InputVenda";
import ListaVendas from "./listaVendas/ListaVendas";
import { useProdutos } from "utils/produtos";
import Botao from "components/botao/Botao";
import ValorTotalDaVenda from "./valorCompras/ValorTotalDaVenda";

export default function Vendas() {
  const { produtosSelecionados, adicionarProduto, somaTotal, setListaVendas } = useProdutos();

  const handleClick = () => {
    setListaVendas(produtosSelecionados);
  };

  return (
    <main className={styles.container}>
      <InputVendas adicionarProduto={adicionarProduto} />
      <ListaVendas produtos={produtosSelecionados} />
      <ValorTotalDaVenda valorTotal={somaTotal} />
      <Botao
        acaoBotao="fecharVenda"
        tipo="primario"
        onClick={handleClick}
      >
        FECHAR VENDA
      </Botao>
    </main>
  );
}
