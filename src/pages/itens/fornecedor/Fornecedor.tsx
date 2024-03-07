
import { useState } from "react";

export default function Fornecedor() {
  const defaultFornecedor = {
    fornecedor: "",
    cnpj: "",
    nome_fantasia: "",
    endereco: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    cep: "",
    telefone: "",
    celular: "",
    email1: "",
    email2: "",
    alerta: "",
  };

  const [value, setValue] = useState(defaultFornecedor);

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setValue((current) => ({ ...current, [ev.target.name]: ev.target.value }));
  };

  const handleTextAreaChange = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue((current) => ({ ...current, [ev.target.name]: ev.target.value }));
  };

  return (
    <section className="display alinhamento">
      <form className="section_form">
        <div className="section_form_div">
          <div className="block">
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
          <div className="display alinhamento gap">
            <div className="block grow">
              <label htmlFor="name" className="label">
                CNPJ:
              </label>
              <input
                className="input"
                type="text"
                name="cnpj"
                id="cnpj"
                required
                value={value.cnpj}
                onChange={handleChange}
              />
            </div>
            <div className="block grow">
              <label htmlFor="name" className="label">
                Nome fantasia:
              </label>
              <input
                className="input"
                type="text"
                name="nome_fantasia"
                id="nome_fantasia"
                value={value.nome_fantasia}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="display alinhamento gap">
            <div className="block grow_3">
              <label htmlFor="name" className="label">
                Endereço:
              </label>
              <input
                className="input"
                type="text"
                name="endereco"
                id="endereco"
                required
                value={value.endereco}
                onChange={handleChange}
              />
            </div>

            <div className="block grow">
              <label htmlFor="name" className="label">
                Número:
              </label>
              <input
                className="input"
                type="text"
                name="numero"
                id="numero"
                required
                value={value.numero}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="block">
            <label htmlFor="name" className="label">
              Complemento ou referência:
            </label>
            <input
              className="input"
              type="text"
              name="complemento"
              id="complemento"
              value={value.complemento}
              onChange={handleChange}
            />
          </div>
          <div className="display alinhamento between gap">
            <div className="block grow">
              <label htmlFor="name" className="label">
                Bairro:
              </label>
              <input
                className="input"
                type="text"
                name="bairro"
                id="bairro"
                required
                value={value.bairro}
                onChange={handleChange}
              />
            </div>
            <div className="block grow">
              <label htmlFor="name" className="label">
                Cidade:
              </label>
              <input
                className="input"
                type="text"
                name="cidade"
                id="cidade"
                required
                value={value.cidade}
                onChange={handleChange}
              />
            </div>
            <div className="block grow">
              <label htmlFor="name" className="label">
                CEP:
              </label>
              <input
                className="input"
                type="text"
                name="cep"
                id="cep"
                required
                value={value.cep}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="display alinhamento gap between">
            <div className="block grow">
              <label htmlFor="name" className="label">
                Telefone:
              </label>
              <input
                className="input"
                type="text"
                name="telefone"
                id="telefone"
                value={value.telefone}
                onChange={handleChange}
              />
            </div>

            <div className="block grow">
              <label htmlFor="name" className="label">
                Celular:
              </label>
              <input
                className="input"
                type="text"
                name="celular"
                id="celular"
                required
                value={value.celular}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="display alinhamento gap between">
            <div className="block grow">
              <label htmlFor="name" className="label">
                E-mail 1:
              </label>
              <input
                className="input"
                type="text"
                name="email1"
                id="email1"
                required
                value={value.email1}
                onChange={handleChange}
              />
            </div>

            <div className="block grow">
              <label htmlFor="name" className="label">
                E-mail 2:
              </label>
              <input
                className="input"
                type="text"
                name="email2"
                id="email2"
                value={value.email2}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="block">
            <label htmlFor="name" className="label">
              Alerta:
            </label>
            <textarea
              className="input"
              rows={10}
              name="alerta"
              id="alerta"
              required
              value={value.alerta}
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
