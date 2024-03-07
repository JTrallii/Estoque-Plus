export interface IUsuario {
  nome: string;
  email: string;
  senha: string;
}

export function salvarUsuarios(usuarios: IUsuario[]): void {
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

export function carregarUsuarios(): IUsuario[] {
  const usuarios = localStorage.getItem("usuarios");
  if (usuarios) {
    return JSON.parse(usuarios) as IUsuario[];
  } else {
    return [];
  }
}
