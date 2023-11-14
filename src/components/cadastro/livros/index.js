import React from "react";
import { useForm } from "react-hook-form";


const CadastroLivro = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="divFormLivro">
          Título<input className="formLivro" type="text" placeholder="Titulo" {...register("Titulo", {required: true})} />
          Autor<input  className="formLivro"type="text" placeholder="Autor" {...register("Autor", {required: true})} />
          Gênero<input className="formLivro" type="text" placeholder="Gênero" {...register("Gênero", {required: true})} />
          Editora<input className="formLivro" type="text" placeholder="Editora" {...register("Editora", {required: true})} />
        </div>
          <input id="cadastrarButton" type="submit" value="CADASTRAR" />
      </form>
    );
}

export default CadastroLivro;