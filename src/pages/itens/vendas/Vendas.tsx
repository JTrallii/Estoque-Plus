import styles from "./vendas.module.css";
import produtos from "data/estoque.json";

export default function Vendas() {
  return (
    <section className={`${styles.display} ${styles.container}`}>
      <div className={`${styles.display}`}>
        <div className={`${styles.direction} ${styles.display}`}>
          <label className={`${styles.label}`}>Quantidade</label>
          <input className={`${styles.input}`} type="text" />
        </div>
        <div className={`${styles.direction} ${styles.display}`}>
          <label className={`${styles.label}`}>Descrição</label>
          <select className={`${styles.select}`} name="" id="">
            <option defaultValue="Selecione um item">Selecione um item</option>
            {produtos.map((produto) => (
              <option value={produto.produto} key={produto.id}>
                {produto.produto}
              </option>
            ))}
          </select>
        </div>
        <div className={`${styles.direction} ${styles.display}`}>
          <label className={`${styles.label}`}>Preço</label>
          <input className={`${styles.input}`} type="text" />
        </div>
      </div>
    </section>
  );
}
