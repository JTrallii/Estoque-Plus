function geraCodigoBarras() {
  return Math.floor(Math.random() * 100000000000);
}
console.log(geraCodigoBarras());

const produtos = [
  {
    id: "0",
    codigo_barras: geraCodigoBarras(),
    produto: "",
    fornecedor: "",
    un_medida: "",
    quantidade: "",
    qtd_minima: "",
    peso: "",
    custo_compra: "",
    custo_venda: "",
    categoria: "",
    descricao: "",
  },
];
