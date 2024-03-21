import styles from "./listaVendas.module.css";
import { IProduto } from "interface/IProduto";

interface ListaVendasProps {
  produtos: IProduto[];
}

export default function ListaVendas({ produtos }: ListaVendasProps) {
  return (
    <section className={styles.container}>
      <div className={styles.container__list}>
        <h2 className={styles.titulo__tabela}>LISTA DE ITENS</h2>
        <table className={`${styles.tabela}`}>
          <thead>
            <tr>
              <th>Quantidade</th>
              <th>Descrição</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((produto, index) => (
              <tr key={index}>
                <td>{produto.quantidade}</td>
                <td>{produto.produto}</td>
                <td>{produto.custo_venda}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
