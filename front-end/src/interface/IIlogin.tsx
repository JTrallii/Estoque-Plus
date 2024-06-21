export interface ILogin {
  email: string;
  senha: string;
}

export interface ICadastro extends ILogin {
  nome: string;
}
