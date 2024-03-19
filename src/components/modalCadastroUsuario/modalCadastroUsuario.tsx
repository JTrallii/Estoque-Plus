import { useState } from "react";
import styles from "./modalCadastroUsuario.module.css";
import imagem_cadastro from "img/imagem_cadastro.png";
import { carregarUsuarios, salvarUsuarios } from "data/usuarios";
import { ICadastro, ILogin } from "interface/IIlogin";


interface ModalCadastroUsuarioProps {
  aoFechar: () => void;
  aberta: boolean;
}

export default function ModalCadastroUsuario({
  aoFechar,
  aberta,
}: ModalCadastroUsuarioProps) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [isNomeValido, setIsNomeValido] = useState(false);
  const [isEmailValido, setIsEmailValido] = useState(false);
  const [isSenhaValido, setIsSenhaValido] = useState(false);
  const [errorNome, setErrorNome] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorSenha, setErrorSenha] = useState("");
  const [formSubmetido, setFormSubmetido] = useState(false);

  const usuarios = carregarUsuarios();

  const resetFormulario = () => {
    setNome("");
    setEmail("");
    setSenha("");
    setIsNomeValido(false);
    setIsEmailValido(false);
    setIsSenhaValido(false);
    setErrorNome("");
    setErrorEmail("");
    setErrorSenha("");
    setFormSubmetido(false);
  };

  const validarNome = (nome: string): boolean => {
    if (nome.length < 4) {
      setErrorNome("Nome deve conter pelo menos 4 caracteres.");
      setIsNomeValido(false);
      return false;
    }
    setErrorNome("");
    setIsNomeValido(true);
    return true;
  };

  const validarEmail = (email: string): boolean => {
    const emailRegex = /\w{3,}@[a-zA-Z]{3,}\.[a-zA-Z]{2,}/;
    if (!emailRegex.test(email)) {
      setErrorEmail("Email inválido.");
      setIsEmailValido(false);
      return false;
    }

    const emailCadastrado = usuarios.some(
      (usuario: ILogin) => usuario.email === email
    );
    console.table(emailCadastrado);
    if (emailCadastrado) {
      setErrorEmail("Email já cadastrado.");
      setIsEmailValido(false);
      return false;
    }

    setErrorEmail("");
    setIsEmailValido(true);
    return true;
  };

  const validarPassword = (password: string): boolean => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9\s]).{8,}$/;
    if (!passwordRegex.test(password)) {
      setErrorSenha("Senha deve conter pelo menos 1 letra maiuscula, 1 letra minúscula, 1 número e 1 caracter especial!");
      setIsSenhaValido(false);
      return false;
    }
    setErrorSenha("");
    setIsSenhaValido(true);
    return true;
  };


  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setFormSubmetido(true);
    
    try {
      validarNome(nome);
      validarEmail(email);
      validarPassword(senha);

      if (isNomeValido && isEmailValido && isSenhaValido) {
        const novoUsuario: ICadastro = { nome, email, senha };
        const usuariosAtualizados = [...carregarUsuarios(), novoUsuario];
        salvarUsuarios({ usuarios: usuariosAtualizados });
        resetFormulario();
        aoFechar();
      }

    } catch (error: any) {
      console.log(error.message);
    }
  };

  if (!aberta) {
    return null;
  }

  return (
    <div>
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
            src={imagem_cadastro}
            alt={imagem_cadastro}
            className={styles.modal__container_img}
          />
          <p className={styles.modal__container_p}>CADASTRO</p>
          <form
            className={`${styles.borda} ${styles.modal__container_form}`}
            onSubmit={handleSubmit}
          >
            <label htmlFor="email" className={`${styles.display}`}>
              Nome:
              <input
                type="text"
                name="name"
                id="name"
                data-test="name-input"
                placeholder="Digite seu nome"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
                className={
                  formSubmetido && !isNomeValido ? styles.invalido : ""
                }
              />
              <span className={styles.error}>{errorNome}</span>
            </label>
            <label htmlFor="senha" className={`${styles.display}`}>
              E-mail:
              <input
                type="email"
                name="email"
                id="email"
                data-test="email-input"
                placeholder="Digite seu email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                className={
                  formSubmetido && !isEmailValido ? styles.invalido : ""
                }
              />
              <span className={styles.error}>{errorEmail}</span>
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
                onChange={(event) => {
                  setSenha(event.target.value);
                }}
                className={
                  formSubmetido && !isSenhaValido ? styles.invalido : ""
                }
              />
              <span className={styles.error}>{errorSenha}</span>
            </label>
            <div className={`${styles.display} ${styles.align}`}>
              <button type="submit">Cadastrar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
