import React from "react";
import { useForm, Controller } from 'react-hook-form';
import './login.css'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Cookies from 'js-cookie';

const Login = () => {
    const navigate = useNavigate();
    const { handleSubmit, control, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:8080/auth/login', {
                email: data.email,
                senha: data.password,
            });

            if (response.status === 200){
                Cookies.set('logged',true);

                navigate('/');
                console.log('Login bem-sucedido!')
            } else {
                console.error('Falha no login.')
            }

        } catch (error) {
            console.error('Erro ao enviar solicitacao de login: ', error)
        }
    };

  return (
    <div className="center-container">
            <form onSubmit={handleSubmit(onSubmit)} className="retangulo">
                <div>
                    <label>Email:</label>
                    <Controller
                        name="email"
                        control={control}
                        rules={{ required: 'Email é obrigatório' }}
                        render={({ field }) => (
                            <input
                                type="email"
                                {...field}
                                placeholder="Digite seu email"
                            />
                        )}
                    />
                    {errors.email && <span>{errors.email.message}</span>}
                </div>

                <div>
                    <label>Senha:</label>
                    <Controller
                        name="password"
                        control={control}
                        rules={{ required: 'Senha é obrigatória' }}
                        render={({ field }) => (
                            <input
                                type="password"
                                {...field}
                                placeholder="Digite sua senha"
                            />
                        )}
                    />
                    {errors.password && <span>{errors.password.message}</span>}
                </div>

                <button type="submit">Entrar</button>
                <Link to='/pessoa'> 
                <div className="register">
                    Cadastre-se!
                </div>       
            </Link>
            </form>
        </div>
  );
}

export default Login;