import React from "react";
import { useForm } from "react-hook-form";
import Livros from "../livros/livros";
import './styles.css'

const RetirarOuDevolverPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data);
  const [operacao, setOperacao] = React.useState(null);

  const handleRadioChange = (event) => {
    const { name, value } = event.target;
    if (name === 'operacao') {
      setOperacao(value);
    } 
  };

  return (
    <div className="outsideFormLivro">
      <form className="formLivroRD" onSubmit={handleSubmit((data) => console.log(data))}>
        <div className="radioButtonsLivro">
          <div className="divradioLivro">
            <div className="radioLivro">
              <input
                id="RETIRAR"
                type="radio"
                name="operacao"
                value="RETIRAR"
                {...register("operacao", { required: true })}
                onChange={handleRadioChange}
              />
              <label htmlFor="RETIRAR">RETIRAR</label>
            </div>
            <div>
              <input
                id="DEVOLVER"
                type="radio"
                name="operacao"
                value="DEVOLVER"
                {...register("operacao", { required: true })}
                onChange={handleRadioChange}
              />
              <label htmlFor="DEVOLVER">DEVOLVER</label>
            </div>
          </div>
        </div>
        <div className="divFormLivro">
              Usuário<input type="text" {...register("usuario", { required: true })} />
              Livro<input type="text" {...register("livro", { required: true })} />
              Data<input type="date" {...register("data", { required: true })} />
              {operacao === 'RETIRAR' && (
                <>
                  Até<input type="date" {...register("ate", { required: true })} />                </>
              )}
        </div>
        <input className="inputLivro" type="submit" value={operacao === 'RETIRAR' ? 'RETIRAR' : 'DEVOLVER'} />
      </form>
      <div className="divTextAreaLivro">
        <Livros />
      </div>
    </div>
  );
}

export default RetirarOuDevolverPage;