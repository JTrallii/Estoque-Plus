import { useState } from "react";
import styles from "./modalLoginUsuario.module.css";
import imagem_login from "img/imagem_login.png";
import { ICadastro, carregarUsuarios } from "data/usuarios";
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
  salvarNomeUsuario
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


  const validaEmail = (email: string): ICadastro | null => {
    const emailFind = usuarios.find((usuario) => usuario.email === email);
    setIsEmailValido(!!emailFind);

    return emailFind || null;
  };

  const validaSenha = (senha: string): boolean => {
    const senhaFind = usuarios.find((usuario) => usuario.senha === senha);
    const senhaValido = !!senhaFind;

    setIsSenhaValido(senhaValido);
    return senhaValido;
  };

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    try {
      const usuarioEncontrado = validaEmail(email);
      validaSenha(senha);
  
      if (isEmailValido && isSenhaValido) {

        navigate("/home/vendas");
        aoEfetuarLogin();

        if (usuarioEncontrado) {
          salvarNomeUsuario(usuarioEncontrado.nome);
        } else {
          setError("Email ou senha incorretos !");
        }
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
        onClick={() => { aoFechar(); resetFormulario(); }}
        aria-hidden="true"
      />
      <div className={styles.janela__modal}>
        <button className={styles.fechar__modal} onClick={() => { aoFechar(); resetFormulario(); }}>
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
          <form className={`${styles.borda} ${styles.modal__container_form}`} onSubmit={handleSubmit}>
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
            <span className={styles.error}>{error}</span>
            <div className={`${styles.display} ${styles.align}`}>
              <button type="submit">Acessar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
