import { useState } from "react";
import styles from "./modalLoginUsuario.module.css";
import imagem_login from "img/imagem_login.png";
import { carregarUsuarios } from "data/usuarios";
import { useNavigate } from "react-router-dom";

interface ModalLoginUsuarioProps {
  aoFechar: () => void;
  aberta: boolean;
  aoEfetuarLogin: () => void;
  salvarNomeUsuario: (nome: string) => void;
}

export default function ModalLoginUsuario({
  aoFechar,
  aberta,
  aoEfetuarLogin,
  salvarNomeUsuario,
}: ModalLoginUsuarioProps) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [isEmailValido, setIsEmailValido] = useState(false);
  const [isSenhaValido, setIsSenhaValido] = useState(false);

  const usuarios = carregarUsuarios();
  const navigate = useNavigate();

  const resetFormulario = () => {
    setEmail("");
    setSenha("");
  };

  const validaEmail = (email: string) => {
    const emailFind = usuarios.filter((usuario) => usuario.email === email);
    if (emailFind.length > 0) {
      setIsEmailValido(true);
      salvarNomeUsuario(emailFind[0].nome);
      return true;
    }
    setError("Email ou senha incorretos !");
    return false;
  };

  const validaSenha = (senha: string) => {
    const senhaFind = usuarios.filter((usuario) => usuario.senha === senha);
    if (senhaFind.length > 0) {
      setIsSenhaValido(true);
      return senhaFind;
    }
    setError("Email ou senha incorretos !");
    return false;
  };

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    try {
      validaEmail(email);
      validaSenha(senha);

      if (isEmailValido && isSenhaValido) {
        navigate("/home/vendas");
        aoEfetuarLogin();
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  if (!aberta) {
    return <></>;
  }

  return (
    <>
      <div
        className={styles.background__modal}
        onClick={() => {
          aoFechar();
          resetFormulario();
        }}
        aria-hidden="true"
      />
      <div className={styles.janela__modal}>
        <button
          className={styles.fechar__modal}
          onClick={() => {
            aoFechar();
            resetFormulario();
          }}
        >
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
          <form
            className={`${styles.borda} ${styles.modal__container_form}`}
            onSubmit={handleSubmit}
          >
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
            <label htmlFor="senha" className={`${styles.display}`}>
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
              <span className={styles.error}>{error}</span>
            </label>
            <div className={`${styles.display} ${styles.align}`}>
              <button type="submit">Acessar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
