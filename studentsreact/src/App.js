import React, { useState, useEffect } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import logoCadastro from './assets/cadastro.png';


function App() {
  const baseUrl = "https://localhost:44354/api/Alunos";

  const [data, setData] = useState([]);
  const [modalIncluir, setModalIncluir] = useState(false);

  const [alunoSelecionado, setAlunoSelecionado] = useState({
    id: '',
    nome: '',
    email: '',
    idade: ''
  });

  const abrirFecharModalIncluir=()=>{
    setModalIncluir(!modalIncluir);
  }

  const handleChange = e => {
    const {name, value} = e.target;
    setAlunoSelecionado({
      ...alunoSelecionado,[name]:value
    });
  }

  const pedidosGet = async () => {
    await axios.get(baseUrl)
      .then((response) => {
        setData(response.data);
      }).catch((error) => {
        console.log(error);
      })
  }

  const pedidoPost = async () => {
    delete alunoSelecionado.id;
    alunoSelecionado.idade=parseInt(alunoSelecionado.idade);
      await axios.post(baseUrl, alunoSelecionado)
        .then(response=>{
          setData(data.concat(response.data));
          abrirFecharModalIncluir();
        }).catch((error) => {
          console.log(error);
        })
  }

  useEffect(() => {
    pedidosGet();
  }, [])

  return (
    <div className="App">
      <br />
      <h3>Cadastro de Alunos</h3>
      <header className="App-header">
        <div className style={{ "height": "100px" }}>
          <img className="mh-100" style={{ "width": "100px", "height": "200px" }} src={logoCadastro} alt="Cadastro" />
        </div>
        <div style={{ "height": "100px" }}>
          <button className="mh-100 mt-2 ml-2 btn btn-success"  onClick={()=>abrirFecharModalIncluir()}>Incluir Novo Aluno</button>
        </div>
      </header>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Idade</th>
            <th>Operação</th>
          </tr>
        </thead>
        <tbody>
          {data.map(aluno => (
            <tr key={aluno.id}>
              <td>{aluno.id}</td>
              <td>{aluno.nome}</td>
              <td>{aluno.email}</td>
              <td>{aluno.idade}</td>
              <td>
                <button className="btn btn-primary">Editar</button> {" "}
                <button className="btn btn-danger">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal isOpen={modalIncluir}>
        <ModalHeader>Incluir Alunos</ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>Nome: </label>
            <br />
            <input type="text" name="nome" onChange={handleChange} className="form-control" />
            <br />
            <label>Email: </label>
            <br/>
            <input type="text" name="email" onChange={handleChange} className="form-control" />
            <br/>
            <label>Idade: </label>
            <br/>
            <input type="text" name="idade" onChange={handleChange} className="form-control" />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={()=>pedidoPost()}>Incluir</button> {" "}
          <button className="btn btn-danger" onClick={()=>abrirFecharModalIncluir()}>Cancelar</button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default App;
