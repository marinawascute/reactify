import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';
import logoImg from '../../assets/logo/logo-reactify-black-yellow.png';

export default function Login({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log(email)
  console.log(password)

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      let response = await api.post('/users/authenticate', { email: email, password: password });
      localStorage.setItem("email",email);
      history.push('/home');
    } catch (error) {
      alert("Email ou senha errados!")
    }

  }
  return (
    <>
      <div className="login-container">
        <div className="content">
          <p>
            <center>
              <img src={logoImg} alt="Reacti Fy" />
            </center>
            <center>
              <strong>Login</strong>
            </center>
          </p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-MAIL*</label>
            <input
              id="email"
              type="email"
              placeholder="Digite seu e-mail de login aqui"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />

            <label htmlFor="password">SENHA</label>
            <input
              id="password"
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
            <button className="btn" type="submit">Entrar</button>
            <br />
            <section>
              <Link className="back-link" to="/register">
                Não tenho cadastro
                </Link>
            </section>
          </form>

        </div>

      </div>

    </>
  );

}