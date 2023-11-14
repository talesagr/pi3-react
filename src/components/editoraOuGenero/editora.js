import React from "react";
import { useForm } from 'react-hook-form';
import EditoraGeneroTextArea from './textarea/textAreaEditoraGenero.js';

const EditoraOuGenero = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const [operacao, setOperacao] = React.useState(null);

    const handleRadioChange = (event) => {
        const { name, value } = event.target;
        if (name === 'operacao') {
            setOperacao(value);
        }
    };

    console.log(errors);

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
                            <input value="EDITORA" type="checkbox" placeholder="Editora"  {...register("Editora", {required: true})} />
                            <label htmlFor="EDITORA">Editora</label>
                            <input value="GENERO" type="checkbox" placeholder="Gênero" {...register("Genero", {required: true})} />
                            <label htmlFor="GENERO">Gênero</label>
                        </div>
                        <input id="descricao" type="text" placeholder="Descrição" {...register("Descrição", {})} />
                    </div>
                    <input id="botaoFinal" value={operacao === 'CONSULTAR' ? 'CONSULTAR' : 'CADASTRAR'} type="submit" />
                </form>
            <div className="divTextAreaEditoraGenero">
                <EditoraGeneroTextArea />
            </div>
        </div>
    );
}

export default EditoraOuGenero;