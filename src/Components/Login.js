import React from 'react';
import '../App.scss';
import img from '../images/logo.png'


export default app =>
    <div class="acess">
      <form action="#">
        <div class="logo">
          <h1>Together</h1>
          <img src={img} alt="Together" />
        </div>
      
        <div class="login">
          <input type="text" placeholder="Login" />
        </div>
        <div class="password">
          <input type="password" placeholder="Senha" />
        </div>
        <div class="submit">
          <button>Entrar</button>
          <p>Perdi minha senha</p>
          <p>Cadastre-se</p>
        </div>
      </form>
    </div>
