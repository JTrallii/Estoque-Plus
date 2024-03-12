import Botao from "components/botao/Botao";
import styles from "./header.module.css";
import logo from "img/logo.png";
import login from "img/circle-user-round.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ModalLoginUsuario from "components/modalLoginUsuario/ModalLoginUsuario";
import ModalCadastroUsuario from "components/modalCadastroUsuario/modalCadastroUsuario";


export default function Header() {
  const [modalLoginUsuario, setModalLoginUsuario] = useState(false);
  const [modalCadastroUsuario, setModalCadastroUsuario] = useState(false);
  const [burguerOpen, setBurguerOpen] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [usuarioLogado, setUsuarioLogado] = useState(false);


  const navigate = useNavigate();

  const aoEfetuarLogin = () => {
    setModalLoginUsuario(false);
    setUsuarioLogado(true);
    navigate("/home");
  };

  const aoEfetuarLogout = () => {
    setUsuarioLogado(false);
    navigate("/");
  };

  const salvarNomeUsuario = (usuarioEncontrado: string) => {
    setUsuario(usuarioEncontrado);
  };

  return (
    <>
      <header className={`${styles.container} ${styles.display}`}>
        <div
          className={`${styles.container_menu} ${styles.display} ${styles.justify}`}
        >
          <img src={logo} alt="" className={styles.img} />
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
                  aoEfetuarLogin={aoEfetuarLogin}
                  salvarNomeUsuario={salvarNomeUsuario}
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
          {usuarioLogado &&(
            <>
              <div className={`${styles.display} ${styles.justify} ${styles.gap} ${styles.divEstaLogado}`}>
                <img src={login} alt={login} className={`${styles.imgLogin}`}/>
                <span className={styles.login}>Olá {usuario}</span>
                <Botao
                  acaoBotao="sair"
                  tipo="secundario"
                  onClick={aoEfetuarLogout}
                >
                    Sair
                </Botao>
              </div>
            </>
          )}
        </div>
      </header>
    </>
  );
}
