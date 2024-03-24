import styles from "./listaVendas.module.css";
import { IValorTotal } from "interface/IProduto";

interface ListaVendasProps {
  produtos: IValorTotal[];
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
                <td>R$ {produto.valorTotal?.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
