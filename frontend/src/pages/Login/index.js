import React from 'react';
import {useState} from 'react';

import logo from '../../assets/spotify.svg';
import api from '../../services/api';

export default function Login({ history}){
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');  

    async function handleSubmit(event){
    event.preventDefault();
    
    const response = await api.post('/users/authenticate', {email: email, password:password});
    console.log(response);
    // const {_id}=response.data;

    // localStorage.setItem('user', _id);

    history.push('/dashboard');
    
  } 
    return (  
      
        <>
        <p>
         <strong>Login com Reactify</strong>
         <img src={logo} alt="spotify"/>
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-MAIL*</label>
          <input 
          id="email"
          type="email"
          placeholder="Digite seu e-mail de login aqui"
          value={email}
          onChange={event=>setEmail(event.target.value)}
          />

          <label htmlFor="password">SENHA</label>
          <input 
          id="password"
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={event=>setPassword(event.target.value)}
          />
          <button className="btn" type="submit">Entrar</button>
      </form>
      </>
      );

}