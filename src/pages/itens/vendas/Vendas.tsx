import styles from "./vendas.module.css";

export default function Vendas() {
  return (
    <div className="display alinhamento">
      <div>
        <label htmlFor="">Quantidade</label>
        <input type="text" className="input" />
      </div>
      <div>
        <label htmlFor="">Produto</label>
        <select name="" id="" className="select selecionar">
          <option defaultValue="Selecione uma opção">
            Selecione um produto
          </option>
        </select>
      </div>
      <div>
        <label htmlFor="">Preço</label>
        <input type="text" className="input" />
      </div>
      <div>
        <label htmlFor="">Preço total</label>
        <input type="text" className="input" />
      </div>
    </div>
  );
}
