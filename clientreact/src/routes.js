import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './components/Login';
import Alunos from './components/Alunos';
import NovoAluno from './components/NovoAluno';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/alunos" component={Alunos}/>
                <Route path="/aluno/novo/:alunoId" component={NovoAluno}/>

            </Switch>
        </BrowserRouter>
    );
}