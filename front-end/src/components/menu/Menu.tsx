import rotasMenu from "data/rotasMenu";
import { Link, Outlet } from "react-router-dom";
import styles from "./menu.module.css";

export default function Menu() {
  return (
    <>
      <nav>
        <ul className={`${styles.container} ${styles.display}`}>
          {rotasMenu.map((rota, index) => (
            <Link to={rota.to} key={index} className={`${styles.lista}`}>
              <li className={`${styles.display}`}>{rota.label}</li>
            </Link>
          ))}
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
