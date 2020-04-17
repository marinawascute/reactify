import React from 'react';
import {useState} from 'react';
import './styles.css';

import logo from '../assets/spotify.svg';

export default function Login({ history}){
    const [email,setEmail] = useState('');  

  async function handleSubmit(event){
    event.preventDefault();

    history.push('/menu');
    
  } 
    return (  
        <>
          <div className="container">
     
             <div className="content">
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

                        <button className="btn" type="submit">Entrar</button>
                    </form>
            </div>
        </div>
      </>
      );

}