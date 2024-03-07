import { useState } from "react";
import styles from "./modalLoginUsuario.module.css";
import imagem_login from "img/imagem_login.png";
import { IUsuario, carregarUsuarios } from "data/usuarios";
import { useNavigate } from "react-router-dom";

interface ModalLoginUsuarioProps {
  aoFechar:
    | React.MouseEventHandler<HTMLButtonElement>
    | React.MouseEventHandler<HTMLDivElement>;
  aberta: boolean;
}

export default function ModalLoginUsuario({
  aoFechar,
  aberta,
}: ModalLoginUsuarioProps) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleClick: React.MouseEventHandler<HTMLElement> =
    aoFechar || undefined;

  const usuarios = carregarUsuarios();
  const navigate = useNavigate();

  const resetFormulario = () => {
    setEmail("");
    setSenha("");
  };

  const validaEmail = () => {
    const emailCadastrado = usuarios.some(
      (usuario: IUsuario) => usuario.email === email
    );
  };

  const validaSenha = () => {
    const senhaCadastrada = usuarios.some(
      (usuario: IUsuario) => usuario.senha === senha
    );
  };

  if (!aberta) {
    return <></>;
  }

  return (
    <>
      <div
        className={styles.background__modal}
        onClick={handleClick}
        aria-hidden="true"
      />
      <div className={styles.janela__modal}>
        <button className={styles.fechar__modal} onClick={handleClick}>
          X
        </button>
        <div
          className={`${styles.modal__container} ${styles.display} ${styles.align}`}
        >
          <img
            src={imagem_login}
            alt={imagem_login}
            className={styles.modal__container_img}
          />
          <p className={styles.modal__container_p}>LOGIN</p>
          <form className={`${styles.borda} ${styles.modal__container_form}`}>
            <label htmlFor="email" className={`${styles.display}`}>
              E-mail:
              <input
                type="email"
                name="email"
                id="email"
                data-test="email-input"
                placeholder="Digite seu email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>
            <label
              htmlFor="senha"
              className={`${styles.display}`}
            >
              Senha:
              <input
                type="password"
                name="senha"
                id="senha"
                data-test="senha-input"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(event) => setSenha(event.target.value)}
              />
            </label>
            <div className={`${styles.display} ${styles.align}`}>
              <button>Acessar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
