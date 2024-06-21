import Header from "components/header/Header";
import { Outlet } from "react-router-dom";
import styles from "./paginaPadrao.module.css";
import Footer from "pages/footer/Footer";

export default function PaginaPadrao() {
  return (
    <>
      <main className={styles.container}>
        <Header />
        <Outlet />
        <Footer />
      </main>
    </>
  );
}
