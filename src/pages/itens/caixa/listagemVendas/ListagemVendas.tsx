import Botao from "components/botao/Botao";
import styles from "./listagemVendas.module.css";
import { IValorTotal } from "interface/IProduto";

interface ListagemVendasProps {
  listaVendas: IValorTotal[];
  adicionarLista: (listaVenda: IValorTotal) => void;
}

export default function ListagemVendas({ listaVendas }: ListagemVendasProps) {
  return (
    <section className={styles.container}>
      <div className={styles.container__list}>
        <h2 className={styles.titulo__tabela}>LISTA DAS VENDAS</h2>
        <table className={`${styles.tabela}`}>
          <thead>
            <tr>
              <th>Data</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {listaVendas.map((lista, index) => (
              <tr key={index}>
                <td>{lista.data}</td>
                <td>R$ {lista.valorTotal?.toFixed(2)}</td>
                <Botao
                  acaoBotao="excluir"
                  tipo="primario"
                >
                  EXCLUIR
                </Botao>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
