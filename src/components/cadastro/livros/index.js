import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";


const CadastroLivro = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    try {
      
      const livroDTO = {
        livrooid: null,
        titulo: data.Titulo,
        autoroid: 18, 
        paginas: 300, 
        editoraoid: 9, 
        generooid: 18, 
      };

      const response = await axios.post("http://localhost:8080/api/livro", livroDTO);


      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
    
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