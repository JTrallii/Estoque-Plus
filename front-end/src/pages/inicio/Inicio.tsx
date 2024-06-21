import styles from "./inicio.module.css";
import imagem_inicial from "img/imagem_inicial.png";
import imagem_inicial2 from "img/imagem_inicial2.png";
import estoque from "img/caixa.svg";
import produto from "img/carrinho.svg";
import compras from "img/cesta.svg";
import fornecedor from "img/truck.svg";
import vendas from "img/sifrao.svg";
import cliente from "img/users-round.svg";

export default function Inicio() {
  return (
    <>
      <div className={`${styles.container} ${styles.display}`}>
        <div
          className={`${styles.container__colunm} ${styles.display} ${styles.gap}`}
        >
          <div className={`${styles.container__row} ${styles.display}`}>
            <h1>EXPERIMENTE MAIS LIBERDADE NO CONTROLE DA SUA EMPRESA.</h1>
            <img
              src={imagem_inicial}
              alt={imagem_inicial}
              className={styles.img}
            />
          </div>
          <div className={`${styles.container__row} ${styles.display}`}>
            <img
              src={imagem_inicial2}
              alt={imagem_inicial2}
              className={styles.img}
            />
            <h1>DOMINE SEU ESTOQUE. SIMPLIFIQUE COM NOSSA PLATAFORMA.</h1>
          </div>
          <p className={styles.vantagem}>VANTAGENS DO NOSSO SISTEMA:</p>
          <div
            className={`${styles.vantagens} ${styles.display} ${styles.gap}`}
          >
            <div>
              <img
                src={produto}
                alt={produto}
                className={`${styles.vantagens__img}`}
              />
              <p className={`${styles.vantagens__descricao}`}>
                Sistema de cadastro de produtos
              </p>
            </div>
            <div>
              <img
                src={fornecedor}
                alt={fornecedor}
                className={`${styles.vantagens__img}`}
              />
              <p className={`${styles.vantagens__descricao}`}>
                Sistema de cadastro de fornecedores
              </p>
            </div>
            <div>
              <img
                src={cliente}
                alt={cliente}
                className={`${styles.vantagens__img}`}
              />
              <p className={`${styles.vantagens__descricao}`}>
                Sistema de cadastro de clientes
              </p>
            </div>
            <div>
              <img
                src={estoque}
                alt={estoque}
                className={`${styles.vantagens__img}`}
              />
              <p className={`${styles.vantagens__descricao}`}>
                Sistema de controle de caixa
              </p>
            </div>
            <div>
              <img
                src={vendas}
                alt={vendas}
                className={`${styles.vantagens__img}`}
              />
              <p className={`${styles.vantagens__descricao}`}>
                Sistema de controle de vendas
              </p>
            </div>
            <div>
              <img
                src={compras}
                alt={compras}
                className={`${styles.vantagens__img}`}
              />
              <p className={`${styles.vantagens__descricao}`}>
                Sistema de controle de compras
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
