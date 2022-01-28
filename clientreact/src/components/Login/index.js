import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';

import logoImage from '../../assets/login.png';


export default function Login () {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function login(event) {
        event.preventDefault();

        const data = {
            email, password
        };
    }

    return(
        <div className="login-container">
            <section className="form">
                <form onSubmit={login}>
                    <img src={logoImage} alt="Login" id="img1" />
                    <h1>Cadastro de Alunos</h1>

                        <input placeholder="Email" 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />

                        <input type="password" placeholder="Password" 
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />

                        <button class="button" type="submit">Login</button>
                </form>
            </section>
        </div>
    )
}