import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Pessoa from "../../../components/pessoa";
import axios from "axios";
import './styles.css';

const PessoaPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [operacao, setOperacao] = React.useState(null);
  const [tipoCadastro, setTipoCadastro] = React.useState(null);
  const [resultText, setResultText] = useState("");
  const [message, setMessage] = useState("");

  const handleRadioChange = (event) => {
    const { name, value } = event.target;
    if (name === 'operacao') {
      setOperacao(value);
    } else if (name === 'tipoCadastro') {
      setTipoCadastro((prevValue) => (prevValue === value ? null : value));
    }
  };

  const buildRequestBody = (data) => {
    let requestBody = {};

    if (operacao === 'CONSULTAR') {
      const userTypeDTO = { userType: tipoCadastro };

      if (tipoCadastro === 'AUTOR' && (data.Nome || data.Email)) {
        requestBody = buildCadastroRequestBody(data);
      } else if (tipoCadastro !== 'AUTOR') {
        requestBody = { userTypeDTO }
      }
    } else {
      requestBody = buildCadastroRequestBody(data);
    }

    return requestBody;
  };

  const buildCadastroRequestBody = (data) => {
    if (tipoCadastro === 'AUTOR') {
      return {
        nome: data.Nome,
        pessoa: {
          nome: data.Nome,
          idade: 30,
          cpf: "",
          endereco: "",
          celular: "",
          userType: tipoCadastro
        },
      };
    } else {
      return {
        usuariooid: null,
        pessoa: {
          nome: data.Nome,
          idade: 30,
          cpf: "",
          endereco: "",
          celular: "",
          userType: tipoCadastro
        },
        email: data.Email,
        senha: data.Senha,
      };
    }
  };

  const sendRequest = async (url, requestBody, data) => {
    try {
      let response;

      if (operacao === 'CADASTRAR') {
        response = await axios.post(url, requestBody);
      } else if (operacao === 'CONSULTAR') {
        if (tipoCadastro === 'AUTOR' && data.Nome) {
          const consultaURL = `${url}/${encodeURIComponent(requestBody.nome)}`;

          response = await axios.get(consultaURL);

          setResultText(JSON.stringify(response.data, null, 2))
        } else {
          const consultaURL = tipoCadastro === 'AUTOR' ? url : `${url}/${tipoCadastro.toLowerCase()}`
          response = await axios.get(consultaURL);

          setResultText(JSON.stringify(response.data, null, 2))
        }
      }
/* comentado pois nao vai dar tempo de consertar erro ao cadastar novos usuarios */ // setResultText(JSON.stringify(response.data, null, 2));
      console.log('Resposta do backend:', response.data);

      if (response.data && response.data.resultMessage){
        console.log("Operacao realizada com sucesso!",response.data.resultMessage)
      } else {
        console.log("Erro ao realziar operacao!")
      }
    } catch (e) {
      console.error('Erro ao enviar a solicitação:', e);
      setMessage("Erro ao realizar a operação. Por favor, tente novamente.")
    }
  };

  const onSubmit = async (data) => {
    try {
      if (!tipoCadastro || !operacao) {
        console.error('Tipo de cadastro e operação são obrigatórios.');
        return;
      }

      const requestBody = buildRequestBody(data);

      const url =
        tipoCadastro === 'AUTOR'
          ? 'http://localhost:8080/api/autor'
          : 'http://localhost:8080/api/user';

      await sendRequest(url, requestBody, data);

    } catch (e) {
      console.error('Erro ao enviar a solicitação:', e);
    }
  };

  return (
    <div className="outsideForm">
      <form className="formPessoa" onSubmit={handleSubmit(onSubmit)}>
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
            <div>
              <input
                id="ATENDENTE"
                type="radio"
                name="tipoCadastro"
                value="ATENDENTE"
                {...register("tipoCadastro", { required: true })}
                onChange={handleRadioChange}
                checked={tipoCadastro === 'ATENDENTE'}
              />
              <label htmlFor="ATENDENTE">ATENDENTE</label>
            </div>
            <div>
              <input
                id="CLIENTE"
                type="radio"
                name="tipoCadastro"
                value="CLIENTE"
                {...register("tipoCadastro", { required: true })}
                onChange={handleRadioChange}
                checked={tipoCadastro === 'CLIENTE'}
              />
              <label htmlFor="CLIENTE">CLIENTE</label>
            </div>
          </div>
        </div>
        <div className="divForm">
          {tipoCadastro === 'AUTOR' ? (
            <>
              Nome<input type="text" {...register("Nome", { required: operacao === 'CADASTRAR' })} />
              {operacao === 'CADASTRAR' && (
                <>
                </>
              )}
            </>
          ) : (
            <>
              Nome<input type="text" {...register("Nome", { required: operacao === 'CADASTRAR' })} />
              {operacao === 'CADASTRAR' && (
                <>
                  E-mail<input type="email" {...register("Email", { required: true })} />
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
        {message && <div className="message">{message}</div>}
        <Pessoa resultText={resultText} />
      </div>
    </div>
  );
};

export default PessoaPage;
