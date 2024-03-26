import { useState } from "react";
import styles from "./inputVenda.module.css";
import produtos from "data/estoque.json";
import { IItem } from "interface/IItem";
import { IProduto, IValorTotal } from "interface/IProduto";
import Botao from "components/botao/Botao";


interface InputVendasProps {
  adicionarProduto: (produto: IValorTotal) => void;
}

export default function InputVendas({ adicionarProduto }: InputVendasProps) {
  const [inputProduto, setInputProduto] = useState("");
  const [itemFiltrado, setItemFiltrado] = useState<IItem[]>([]);
  const [inputQuantidade, setInputQuantidade] = useState("");
  const [inputPreco, setInputPreco] = useState("");
  const [qtdVendida, setQtdVendida] = useState("");
  const [itemSelecionado, setItemSelecionado] = useState<IProduto | null>(null);

  

  const handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const value = ev.target.value;
    setInputProduto(value);

    const produtoFiltrado = produtos.filter((item) =>
      item.produto.toLowerCase().includes(value.toLowerCase())
    );
    setItemFiltrado(produtoFiltrado);
  };

  const handleItemClick = (item: IProduto) => {
    setInputProduto(item.produto);
    setInputPreco(item.custo_venda.toString());
    setInputQuantidade(item.quantidade.toString());
    setItemSelecionado(item);
    setItemFiltrado([]);
  };

  const handleAdd = () => {
    if (itemSelecionado) {
      const quantidade = +qtdVendida;
      if (quantidade <= 0) {
        alert("A quantidade não pode ser menor ou igual a 0 !");
        setQtdVendida("");
        return;
      }

      const indiceProduto = produtos.findIndex(
        (produto) => produto.id === itemSelecionado.id
      );
      if (indiceProduto !== -1) {
        const produtoAtt = [...produtos];

        if (itemSelecionado.quantidade < +qtdVendida) {
          alert(
            `O item ${itemSelecionado.produto} não tem quantidade suficiente em estoque !`
          );
          setQtdVendida("");
          return;
        }
        produtoAtt[indiceProduto].quantidade -= quantidade;
        if (produtoAtt[indiceProduto].quantidade < 0) {
          alert(
            `O item ${itemSelecionado.produto} não tem quantidade suficiente em estoque !`
          );
          setQtdVendida("");
          return;
        }

        setItemFiltrado(produtoAtt);

        adicionarProduto({
          produto: itemSelecionado.produto,
          custo_venda: itemSelecionado.custo_venda,
          quantidade: +qtdVendida,
          valorTotal: +qtdVendida * itemSelecionado.custo_venda,
        });
      }

      setInputProduto("");
      setInputQuantidade("");
      setInputPreco("");
      setQtdVendida("");
      setItemSelecionado(null);
    } else {
      alert("Item selecionado não encontrado no estoque !");
    }
  };

  const handleClear = () => {
    setInputProduto("");
    setInputQuantidade("");
    setInputPreco("");
    setQtdVendida("");
  };

  return (
    <section className={`${styles.section__container} ${styles.gap}`}>
      <div
        className={`${styles.display} ${styles.direction__row} ${styles.justify__center}`}
      >
        <div>
          <label className={`${styles.label}`} htmlFor="estoque">
            ESTOQUE
          </label>
          <input
            className={`${styles.input}`}
            type="text"
            name="estoque"
            id="estoque"
            value={inputQuantidade}
            onChange={(ev) => setInputQuantidade(ev.target.value)}
            readOnly
          />
        </div>
        <div>
          <label className={`${styles.label}`} htmlFor="quantidade">
            QUANTIDADE
          </label>
          <input
            className={`${styles.input}`}
            type="text"
            name="quantidade"
            id="quantidade"
            value={qtdVendida}
            onChange={(ev) => setQtdVendida(ev.target.value)}
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
                  onClick={() => handleItemClick(item)}
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
        <Botao
          acaoBotao="adicionar"
          tipo="primario"
          onClick={() => handleAdd()}
        >
          Adicionar
        </Botao>
        <Botao acaoBotao="limpar" tipo="secundario" onClick={handleClear}>
          Limpar
        </Botao>
      </div>
    </section>
  );
}
