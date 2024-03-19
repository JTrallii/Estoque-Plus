import { ICadastro } from "interface/IIlogin";

export function salvarUsuarios({ usuarios }: { usuarios: ICadastro[]; }): void {
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

export function carregarUsuarios(): ICadastro[] {
  const usuarios = localStorage.getItem("usuarios");
  if (usuarios) {
    return JSON.parse(usuarios) as ICadastro[];
  } else {
    return [];
  }
}
