import Cards from "components/cards/Cards";
import styles from "./dashboard.module.css";

export default function Dashboard() {
  return (
    <main className={styles.container}>
      <h1>DASHBOARD</h1>
      <Cards />
    </main>
  );
}
