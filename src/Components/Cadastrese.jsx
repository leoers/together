import React from 'react';
import '../App.scss'

export default app =>
    <div class="cadastre">
        <form action="#">
            <div class="cadastre-title">
                <h1>Cadastre-se</h1>
            </div>
            <div class="name">
                <input type="text" placeholder="Nome" />
            </div>
            <div class="age">
                <input type="text" placeholder="idade" />
            </div>
            <div class="adress-street">
                <input type="text" placeholder="Endereço" />
            </div>
            <div class="adress">
                <input type="text" placeholder="Bairro" />
                <input type="text" placeholder="Cidade" />
            </div>
            <div class="gender">
                <label>Gênero:</label>
                <select>
                    <option>Masculino</option>
                    <option>Feminino</option>
                    <option>Gay</option>
                    <option>Lésbica</option>
                    <option>Bissexual</option>
                </select>
            </div>
            <div class="marital-status">
                <label>Estado civil:</label>
                <select>
                    <option>Solteiro(a)</option>
                    <option>Separado(a)</option>
                    <option>Viúvo(a)</option>
                    <option>Namorando</option>
                    <option>Casado(a)</option>
                </select>
            </div>
            <div class="searching">
                <label>Em busca de:</label>
                <select>
                    <option>Amizades</option>
                    <option>Encontro casual</option>
                    <option>Namoro</option>
                    <option>Sexo</option>
                </select>
            </div>
            <div class="submit">
                <button>Cadastre-se</button>
            </div>
        </form>
    </div>