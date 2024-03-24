export interface IProduto {
  produto: string, 
  custo_venda: number, 
  quantidade: number
}

export interface IQuantProduto extends IProduto {
  qtd_vendida?: number
}

export interface IValorTotal extends IQuantProduto {
  valorTotal?: number
}