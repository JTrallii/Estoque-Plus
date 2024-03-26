import styles from "./valorCompras.module.css";

interface ValorComprasProps {
  valorTotal: number;
}

export default function ValorCompras({ valorTotal }: ValorComprasProps) {
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
