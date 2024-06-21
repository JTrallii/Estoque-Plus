import styles from "./footer.module.css";
import logo from "img/logo.png";
import facebook from "img/facebook.svg";
import twitter from "img/twitter.svg";
import instagram from "img/instagram.svg";
import youtube from "img/youtube.svg";

export default function Footer() {
  return (
    <footer className={`${styles.container} ${styles.display}`}>
      <div className={`${styles.container__informacao} ${styles.display}`}>
        <h2>INSTITUCIONAL</h2>
        <h4>Política de privacidade</h4>
        <h4>Política de segurança</h4>
        <h4>Quem somos</h4>
      </div>
      <div className={`${styles.container__informacao} ${styles.display}`}>
        <h2>CONTATO</h2>
        <h4>0800 123 456 78</h4>
        <h4>meajuda@estoqueplus.com</h4>
        <h4>ouvidoria@estoqueplus.com</h4>
      </div>
      <div
        className={`${styles.container__informacao} ${styles.display} ${styles.align}`}
      >
        <h2>Desenvolvido por Jason</h2>
        <img src={logo} alt={logo} className={styles.logo} />
        <div
          className={`${styles.container__informacao_social} ${styles.display}`}
        >
          <img src={facebook} alt={facebook} />
          <img src={youtube} alt={youtube} />
          <img src={instagram} alt={instagram} />
          <img src={twitter} alt={twitter} />
        </div>
      </div>
    </footer>
  );
}
