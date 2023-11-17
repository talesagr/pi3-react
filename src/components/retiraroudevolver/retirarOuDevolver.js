import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Livros from "../livros/livros";
import axios from "axios";
import "./styles.css";

const RetirarOuDevolverPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [operacao, setOperacao] = useState(null);
  const [livroList, setLivroList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/livro");
        setLivroList(response.data);
      } catch (error) {
        console.error("Error fetching livro data:", error);
      }
    };

    fetchData();
  }, []); 

  const handleRadioChange = (event) => {
    const { name, value } = event.target;
    if (name === 'operacao') {
      setOperacao(value);
    }
  };

  const onSubmit = async (data) => {
    try {
      const livroId = parseInt(data.livrooid);
      const response = await axios.post(`http://localhost:8080/api/livro/${operacao.toLowerCase()}`, {
        livrooid: livroId,
      });

      console.log(response.data);
    } catch (error) {
      console.error("Error making POST request:", error);
    }
  };

  return (
    <div className="outsideFormLivro">
      <form className="formLivroRD" onSubmit={handleSubmit(onSubmit)}>
        <div className="radioButtonsLivroRD">
          <div className="divradioLivro">
            <div className="radioLivroRD">
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
        <div className="divFormLivroRD">
          Livro ID <input type="text" {...register("livrooid", { required: true })} />
          Data <input type="date" {...register("data", { required: true })} />
          {operacao === 'RETIRAR' && (
            <>
              Até <input type="date" {...register("ate", { required: true })} />
            </>
          )}
        </div>
        <input className="inputLivroRD" type="submit" value={operacao === 'RETIRAR' ? 'RETIRAR' : 'DEVOLVER'} />
      </form>
      <div className="divTextAreaLivro">
        <Livros resultData={livroList} />
      </div>
    </div>
  );
}

export default RetirarOuDevolverPage;
