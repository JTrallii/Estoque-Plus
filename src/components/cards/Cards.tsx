import Card from "./card/Card";
import styles from "./cards.module.css";
import lista from "data/menuDashboard.js";

export default function Cards() {
  return (
    <div className={styles.container}>
      {lista.map((item) => (
        <Card key={item.id}>
          <h3>{item.descricao}</h3>
          <span>{item.total}</span>
        </Card>
      ))}
    </div>
  );
}
