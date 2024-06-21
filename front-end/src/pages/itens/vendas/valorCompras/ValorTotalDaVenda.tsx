import styles from "./valorTotalDaVenda.module.css";

interface ValorTotalDaVendaProps {
  valorTotal: number;
}

export default function ValorTotalDaVenda({ valorTotal }: ValorTotalDaVendaProps) {
  return (
    <section className={`${styles.container}`}>
      <h1 className={`${styles.titulo}`}>VALOR TOTAL:</h1>
      <input
        className={`${styles.input}`}
        type="text"
        name="valor"
        id="valor"
        value={`R$ ${valorTotal.toFixed(2)}`}
        readOnly
        disabled
      />
    </section>
  );
}
