import React from "react";
import './App.css';
import { useNavigate } from 'react-router-dom';


function ListagemPage() {
  const navigate = useNavigate();

  const irParaCadastro = () => { 
    navigate('/');
  }
  return (
    <div style={estilo.body}>
      <h1 >Listagem de Receitas</h1>
      <button onClick={irParaCadastro} className="estiloButton POST">Voltar para Cadastro</button>
      <p>Aqui você verá a lista de receitas cadastradas.</p>
    </div>
  );

}

const estilo = {
    body:{
        padding: 0,
        margin: 0,
        background: '#f8f8f8',
        fontFamily: 'Arial, sans-serif',
    },
    
}

export default ListagemPage;
