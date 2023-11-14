import React from "react";
import { useForm } from "react-hook-form";
import Pessoa from "../../../components/pessoa";
import './styles.css';

const PessoaPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data);
  const [operacao, setOperacao] = React.useState(null);
  const [tipoCadastro, setTipoCadastro] = React.useState(null);

  const handleRadioChange = (event) => {
    const { name, value } = event.target;
    if (name === 'operacao') {
      setOperacao(value);
    } else if (name === 'tipoCadastro') {
      setTipoCadastro((prevValue) => (prevValue === value ? null : value));
    }
  };

  return (
    <div className="outsideForm">
      <form className="formPessoa" onSubmit={handleSubmit((data) => console.log(data))}>
        <div className="radioButtons">
          <div className="divradio">
            <div className="radio">
              <input
                id="CADASTRAR"
                type="radio"
                name="operacao"
                value="CADASTRAR"
                {...register("operacao", { required: true })}
                onChange={handleRadioChange}
              />
              <label htmlFor="CADASTRAR">CADASTRAR</label>
            </div>
            <div>
              <input
                id="CONSULTAR"
                type="radio"
                name="operacao"
                value="CONSULTAR"
                {...register("operacao", { required: true })}
                onChange={handleRadioChange}
              />
              <label htmlFor="CONSULTAR">CONSULTAR</label>
            </div>
            <div>
              <input
                id="AUTOR"
                type="radio"
                name="tipoCadastro"
                value="AUTOR"
                {...register("tipoCadastro", { required: true })}
                onChange={handleRadioChange}
                checked={tipoCadastro === 'AUTOR'}
              />
              <label htmlFor="AUTOR">AUTOR</label>
            </div>
          </div>
        </div>
        <div className="divForm">
          {tipoCadastro === 'AUTOR' ? (
            <>
              Nome<input type="text" {...register("Nome", { required: true })} />
              Livro<input type="text" {...register("Livro", { required: true })} />
            </>
          ) : (
            <>
              Nome<input type="text" {...register("Nome", { required: true })} />
              E-mail<input type="email" {...register("Email", { required: true })} />
              {operacao === 'CADASTRAR' && (
                <>
                  Senha<input type="password" {...register("Senha", { required: true })} />
                  Confirmar senha<input type="password" {...register("ConfirmarSenha", { required: true })} />
                </>
              )}
            </>
          )}
        </div>
        <input className="inputPessoa" type="submit" value={operacao === 'CADASTRAR' ? 'REGISTRAR' : 'CONSULTAR'} />
      </form>
      <div className="divTextAreaPessoa">
        <Pessoa />
      </div>
    </div>
  );
};

export default PessoaPage;
