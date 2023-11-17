import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import EditoraGeneroTextArea from './textarea/textAreaEditoraGenero.js';
import axios from "axios";

const EditoraOuGenero = () => {
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
        return {
            descricao: data.Descrição,
        };
    };

    const buildUrl = (operacao, tipoCadastro, descricao) => {
        if (operacao === 'CONSULTAR' && descricao) {
            return `http://localhost:8080/api/${tipoCadastro.toLowerCase()}/${descricao}`;
        } else {
            return `http://localhost:8080/api/${tipoCadastro.toLowerCase()}`;
        }
    };

    const onSubmit = async (data) => {
        const requestBody = buildRequestBody(data);
        const url = buildUrl(operacao, tipoCadastro, data["Descrição"]);

        try {
            let response;

            if (operacao === 'CADASTRAR') {
                response = await axios.post(url, requestBody);
            } else if (operacao === 'CONSULTAR') {
                response = await axios.get(url);
                setResultText(JSON.stringify(response.data, null, 2));
            }

            console.log('Resposta do backend:', response.data);

            if (response.data && response.data.resultMessage) {
                console.log('Operacao realizada com sucesso!', response.data.resultMessage);
            } else {
                console.log('Erro ao realizar operacao!');
            }
        } catch (e) {
            console.error('Erro ao enviar a solicitação:', e);
            setMessage("Erro ao realizar a operação. Por favor, tente novamente.");
        }
    };

    return (
        <div className="outsideFormEditoraGenero">
            <form className="formEditoraGenero" onSubmit={handleSubmit(onSubmit)}>
                <div className="radiosCadastrarConsultar">
                    <input
                        id="CADASTRAR"
                        type="radio"
                        name="operacao"
                        value="CADASTRAR"
                        {...register("operacao", { required: true })}
                        onChange={handleRadioChange}
                    />
                    <label htmlFor="CADASTRAR">CADASTRAR</label>
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
                <div className="midForm">
                    <div className="radiosEditoraGenero">
                        <input
                            id="EDITORA"
                            value="EDITORA"
                            type="radio"
                            placeholder="Editora"
                            name="tipoCadastro"
                            {...register("tipoCadastro", {required: true})}
                            onChange={handleRadioChange}
                            checked={tipoCadastro === 'EDITORA'}      
                        />
                        <label htmlFor="EDITORA">Editora</label>
                        <input 
                            id="GENERO"
                            value="GENERO"
                            type="radio"
                            placeholder="Gênero"
                            name="tipoCadastro"
                            {...register("tipoCadastro", {required: true})} 
                            onChange={handleRadioChange}
                            checked={tipoCadastro === 'GENERO'}
                        />
                        <label htmlFor="GENERO">Gênero</label>
                    </div>
                    {operacao === 'CONSULTAR' && (
                        <input id="descricao" type="text" placeholder="Descrição" {...register("Descrição", {})} />
                    )}
                    {operacao === 'CADASTRAR' && (
                        <input id="descricao" type="text" placeholder="Descrição" {...register("Descrição", {required: true})} />
                    )}
                </div>
                <input id="botaoFinal" value={operacao === 'CONSULTAR' ? 'CONSULTAR' : 'CADASTRAR'} type="submit" />
            </form>
            <div className="divTextAreaEditoraGenero">
                <EditoraGeneroTextArea resultText={resultText} />
            </div>
        </div>
    );
}

export default EditoraOuGenero;