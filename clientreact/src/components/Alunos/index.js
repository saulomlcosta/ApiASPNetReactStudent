import React from "react";
import { Link } from "react-router-dom"
import './styles.css';

import { FiXCircle, FiEdit, FiUserX } from 'react-icons/fi'

import logoCadastro from "../../assets/cadastro.png"

export default function Alunos() {
    return(
        <div className="aluno-container">
            <header>
                <img className="adminIcon" src={logoCadastro} alt="Cadastro" />
                <span>Bem vindo, <strong>Macoratti</strong>!</span>
                <Link className="button" to="aluno/novo/0">Novo Aluno</Link>
                <button type="button">
                    <FiXCircle size={35} color="#17202a" />
                </button>
            </header>
            <form>
                <input type="text" placeholder="Nome" />
                <button type="button" class="button">
                    Filtrar aluno por nome (parcial)
                </button>
            </form>
            <h1>Relação de Alunos</h1>

            <div className="container-card">
                <div className="card">
                    <ul>
                        <li>
                            <b>Nome: </b>Paulo<br /><br/>
                            <b>Email: </b>paulo@email.com<br /><br/>
                            <b>Idade: </b>22<br /><br/>
                        </li>                   
                    </ul>

                    <div className="button-card">
                        <button type="button" className="button-card">
                                <FiEdit size={35} color="#17202a" />
                        </button>
                            
                        <button type="button" className="button-card">
                            <FiUserX size={35} color="#17202a" />
                        </button>
                    </div>
                    
                  
                </div>

                <div className="card">
                    <ul>
                        <li>
                            <b>Nome: </b>Mariana<br /><br/>
                            <b>Email: </b>mariana@email.com<br /><br/>
                            <b>Idade: </b>25<br /><br/>
                        </li>                   
                    </ul>
                    
                    <div className="button-card">
                        <button type="button" className="button-card">
                                <FiEdit size={35} color="#17202a" />
                        </button>
                            
                        <button type="button" className="button-card">
                            <FiUserX size={35} color="#17202a" />
                        </button>
                    </div>
                    
                </div>                
            </div>
            
            
        </div>
    )
}