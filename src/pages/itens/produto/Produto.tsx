
import { useState } from "react";

export default function Produto() {
  const defaultItem = {
    produto: "",
    codigo_barras: "",
    fornecedor: "",
    un_medida: "",
    quantidade: "",
    qtd_minima: "",
    peso: "",
    custo_compra: "",
    custo_venda: "",
    categoria: "",
    descricao: "",
  };

  const un_medida = [
    "quilo",
    "grama",
    "litro",
    "metro",
    "pacote",
    "centímetro",
    "unidade",
  ];

  const [value, setValue] = useState(defaultItem);

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setValue((current) => ({ ...current, [ev.target.name]: ev.target.value }));
  };
  const handleSelectChange = (ev: React.ChangeEvent<HTMLSelectElement>) => {
    setValue((current) => ({ ...current, [ev.target.name]: ev.target.value }));
  };
  const handleTextAreaChange = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue((current) => ({ ...current, [ev.target.name]: ev.target.value }));
  };
  return (
    <section className="display alinhamento">
      <form className="section_form">
        <div className="section_form_div">
          <div className="display alinhamento gap">
            <div className="grow_3">
              <label htmlFor="name" className="label">
                Produto:
              </label>
              <input
                className="input"
                type="text"
                name="produto"
                id="produto"
                required
                value={value.produto}
                onChange={handleChange}
              />
            </div>
            <div className="grow">
              <label htmlFor="name" className="label">
                Código de barras:
              </label>
              <input
                className="input"
                type="number"
                name="codigo_barras"
                id="codigo_barras"
                required
                value={value.codigo_barras}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="display alinhamento gap">
            <div className="grow_3">
              <label htmlFor="name" className="label">
                Fornecedor:
              </label>
              <input
                className="input"
                type="text"
                name="fornecedor"
                id="fornecedor"
                required
                value={value.fornecedor}
                onChange={handleChange}
              />
            </div>

            <div className="grow">
              <label htmlFor="name" className="label">
                Unidade de medida:
              </label>
              <select
                className="select"
                name="un_medida"
                value={value.un_medida}
                onChange={handleSelectChange}
                data-test="select-opcoes"
              >
                <option defaultValue="Selecione uma opção">
                  Selecione uma opção
                </option>
                {un_medida.map((unidade) => (
                  <option key={unidade} value={unidade}>
                    {unidade}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="display alinhamento between gap">
            <div className="grow">
              <label htmlFor="name" className="label">
                Quantidade:
              </label>
              <input
                className="input"
                type="number"
                name="quantidade"
                id="quantidade"
                min={0.0}
                required
                value={value.quantidade}
                onChange={handleChange}
              />
            </div>
            <div className="grow">
              <label htmlFor="name" className="label">
                Quantidade miníma:
              </label>
              <input
                className="input"
                type="number"
                name="qtdminima"
                id="qtdminima"
                min={0.0}
                required
                value={value.qtd_minima}
                onChange={handleChange}
              />
            </div>
            <div className="grow">
              <label htmlFor="name" className="label">
                Peso:
              </label>
              <input
                className="input"
                type="number"
                name="peso"
                id="peso"
                min={0.0}
                value={value.peso}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="display alinhamento gap between">
            <div className="grow">
              <label htmlFor="name" className="label">
                Custo de compra:
              </label>
              <input
                className="input"
                type="number"
                name="custo_compra"
                id="custo_compra"
                min={0.0}
                step={0.01}
                required
                value={value.custo_compra}
                onChange={handleChange}
              />
            </div>

            <div className="grow">
              <label htmlFor="name" className="label">
                Custo de venda:
              </label>
              <input
                className="input"
                type="number"
                name="custo_venda"
                id="custo_venda"
                min={0.0}
                step={0.01}
                required
                value={value.custo_venda}
                onChange={handleChange}
              />
            </div>
            <div className="grow">
              <label htmlFor="name" className="label">
                Categoria:
              </label>
              <input
                className="input"
                type="text"
                name="categoria"
                id="categoria"
                value={value.categoria}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="">
            <label htmlFor="name" className="label">
              Descrição do produto:
            </label>
            <textarea
              className="input"
              rows={10}
              name="descricao"
              id="descricao"
              required
              value={value.descricao}
              onChange={handleTextAreaChange}
            />
          </div>
        </div>
        <div className="div_botao display gap">
          <button className="salvar">SALVAR</button>
          <button className="cancelar">CANCELAR</button>
          <button className="verTodos">VER PRODUTOS</button>
        </div>
      </form>
    </section>
  );
}
