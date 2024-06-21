import styles from "./caixa.module.css";
import ListagemVendas from "../caixa/listagemVendas/ListagemVendas";
import { useProdutos } from "utils/produtos";

export default function Caixa() {

  const { adicionarLista, produtosSelecionados } = useProdutos();


  return (
    <main className={styles.container}>
      <ListagemVendas listaVendas={produtosSelecionados} adicionarLista={adicionarLista}/>
    </main>
  );
}