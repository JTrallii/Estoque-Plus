export interface ILogin {
  email: string;
  senha: string;
}

export interface ICadastro extends ILogin {
  nome: string
}

export function salvarUsuarios(usuarios: ICadastro[]): void {
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
