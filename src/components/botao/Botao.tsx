import styles from "./botao.module.css";

interface BotaoProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  tipo?: "primario" | "secundario";
  acaoBotao: string;
}

export default function Botao({
  children,
  onClick,
  tipo = "primario",
  acaoBotao,
}: BotaoProps) {
  return (
    <button
      data-test={`botao-${acaoBotao}`}
      className={
        tipo === "secundario" ? styles.btn__secundario : styles.btn__primario
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
}
