import Botao from "components/botao/Botao";
import styles from "./header.module.css";
import logo from "img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import ModalLoginUsuario from "components/modalLoginUsuario/ModalLoginUsuario";
import ModalCadastroUsuario from "components/modalCadastroUsuario/modalCadastroUsuario";

export default function Header() {
  const [modalLoginUsuario, setModalLoginUsuario] = useState(false);
  const [modalCadastroUsuario, setModalCadastroUsuario] = useState(false);
  const [burguerOpen, setBurguerOpen] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [usuarioLogado, setUsuarioLogado] = useState("");

  const navigate = useNavigate();

  console.log(modalLoginUsuario);
  console.log(modalCadastroUsuario);

  return (
    <>
      <header className={`${styles.container} ${styles.display}`}>
        <div
          className={`${styles.container_menu} ${styles.display} ${styles.justify}`}
        >
          <Link to={"/"}>
            <img src={logo} alt="" className={styles.img} />
          </Link>
          {!usuarioLogado && (
            <>
              <div className={`${styles.display}`}>
                <Botao
                  acaoBotao="login"
                  tipo="primario"
                  onClick={() => setModalLoginUsuario(true)}
                >
                  Fazer Login
                </Botao>
                <ModalLoginUsuario
                  aberta={modalLoginUsuario}
                  aoFechar={() => setModalLoginUsuario(false)}
                />
                <Botao
                  acaoBotao="login"
                  tipo="secundario"
                  onClick={() => setModalCadastroUsuario(true)}
                >
                  Fazer Cadastro
                </Botao>
                <ModalCadastroUsuario
                  aberta={modalCadastroUsuario}
                  aoFechar={() => setModalCadastroUsuario(false)}
                />
              </div>
            </>
          )}
        </div>
      </header>
    </>
  );
}
