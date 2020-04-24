import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';
import logoImg from '../../assets/logo/logo-reactify-black-yellow.png';

export default function Register() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();


    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            email,
            password
        };

        try {
            const response = await api.post('usuario', data);

            alert(`Seu cadastro foi realizado com Sucesso! ${response.data.email}`);

            history.push('/dashboard');
        } catch (err) {
            alert('Erro ao cadastrar, tente novamente.');
        }
    }

    return (
        <div className="register-container">
            <div className="content">
            <p>
            <center>
                <img src={logoImg} alt="Reacti Fy" />
            </center>
            <center>
                <strong>Cadastro</strong>
            </center>
            </p>
            <form onSubmit={handleRegister}>
                <label htmlFor="email">E-MAIL</label>
                <input 
                    type="email" 
                    placeholder="E-mail" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                <label htmlFor="password">SENHA</label>
                <input
                    type="password"
                    placeholder="Senha" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />

                <button className="btn" type="submit">Cadastrar</button>
            </form>
            <br />
            <section>
                <Link className="back-link" to="/">
                    Já tenho cadastro!
                </Link>
            </section>
            </div>
        </div>
    );

}