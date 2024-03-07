import styles from "./compras.module.css";

export default function Compras() {
  return (
    <>
      <form action="" className={styles.form}>
        <div className={styles.display}>
          <div>
            <label htmlFor="" className={styles.block}>
              Compras
            </label>
            <input type="text" className={styles.input} />
          </div>
          <div>
            <label htmlFor="" className={styles.block}>
              vendas
            </label>
            <input type="text" className={styles.input} />
          </div>
        </div>
        <div className={styles.display}>
          <div>
            <label htmlFor="" className={styles.block}>
              Compras1
            </label>
            <input type="text" className={styles.input} />
          </div>
          <div>
            <label htmlFor="" className={styles.block}>
              vendas1
            </label>
            <input type="text" className={styles.input} />
          </div>
        </div>
      </form>
    </>
  );
}
