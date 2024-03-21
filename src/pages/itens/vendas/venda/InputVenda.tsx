import { useState } from "react";
import styles from "./inputVenda.module.css";
import produtos from "data/estoque.json";
import { IItem } from "interface/IItem";
import { IProduto } from "interface/IProduto";
import Botao from "components/botao/Botao";

interface InputVendasProps {
  adicionarProduto: (produto: IProduto) => void;
}

export default function InputVendas({ adicionarProduto }: InputVendasProps) {
  const [inputProduto, setInputProduto] = useState("");
  const [itemFiltrado, setItemFiltrado] = useState<IItem[]>([]);
  const [inputQuantidade, setInputQuantidade] = useState("");
  const [inputPreco, setInputPreco] = useState("");

  const handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const value = ev.target.value;
    setInputProduto(value);

    const produtoFiltrado = produtos.filter((item) =>
      item.produto.toLowerCase().includes(value.toLowerCase())
    );
    setItemFiltrado(produtoFiltrado);
  };

  const handleItemClick = (
    produto: string,
    custo_venda: number,
    quantidade: number
  ) => {
    adicionarProduto({ produto, custo_venda, quantidade });
    setInputProduto(produto);
    setInputPreco(custo_venda.toString());
    setInputQuantidade(quantidade.toString());
    setItemFiltrado([]);
  };

  const handleAdd = () => {
    setInputProduto("");
    setInputQuantidade("");
    setInputPreco("");
  };
  
  const handleClear = () => {
    setInputProduto("");
    setInputQuantidade("");
    setInputPreco("");
  };

  return (
    <section className={`${styles.section__container} ${styles.gap}`}>
      <div
        className={`${styles.display} ${styles.direction__row} ${styles.justify__center}`}
      >
        <div>
          <label className={`${styles.label}`} htmlFor="quantidade">
            QUANTIDADE
          </label>
          <input
            className={`${styles.input}`}
            type="text"
            name="quantidade"
            id="quantidade"
            value={inputQuantidade}
            onChange={(ev) => setInputQuantidade(ev.target.value)}
            readOnly
          />
        </div>
        <div className={`${styles.container__descricao}`}>
          <label className={`${styles.label}`} htmlFor="produto">
            PRODUTO
          </label>
          <input
            className={`${styles.container__descricao__input}`}
            type="text"
            name="produto"
            id="produto"
            value={inputProduto}
            onChange={handleInputChange}
            placeholder="Digite o nome do produto..."
          />
          {inputProduto.length > 0 && (
            <ul className={`${styles.container__descricao__ul}`}>
              {itemFiltrado.map((item, index) => (
                <li
                  key={index}
                  onClick={() =>
                    handleItemClick(
                      item.produto,
                      item.custo_venda,
                      item.quantidade
                    )
                  }
                  style={{ cursor: "pointer" }}
                >
                  {item.produto}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <label className={`${styles.label}`} htmlFor="preco">
            PREÇO
          </label>
          <input
            className={`${styles.input}`}
            type="text"
            name="preco"
            id="preco"
            value={inputPreco ? `R$ ${parseFloat(inputPreco).toFixed(2)}` : ""}
            readOnly
          />
        </div>
      </div>
      <div className={`${styles.display} ${styles.justify__center}`}>
        <Botao acaoBotao="adicionar" tipo="primario" onClick={handleAdd}>
          Adicionar
        </Botao>
        <Botao acaoBotao="limpar" tipo="secundario" onClick={handleClear}>
          Limpar
        </Botao>
      </div>
    </section>
  );
}
