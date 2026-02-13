import React, { useState, useEffect } from "react";
import './App.css';
import { useNavigate } from 'react-router-dom';
import ImgFundo from './Imagem/listagem.jpg';
import { listarReceitas } from './AXIO/conexaoAPI';

function ListagemPage() {
  const navigate = useNavigate();

  const irParaCadastro = () => {
    navigate('/');
  }

  // CORREÇÃO 1: Removida a vírgula extra e corrigido o nome para 'receitas'
  const [receitas, setReceitas] = useState([]);

  // CORREÇÃO 2: useEffect ajustado para buscar os dados corretamente
  useEffect(() => {
    listarReceitas()
      .then(dados => {
        setReceitas(dados);
      })
      .catch(err => console.error("Erro ao buscar receitas:", err));
  }, []); // Array vazio significa que executa apenas uma vez ao carregar a página

  return (
    <div style={estilo.body}>
      <header style={estilo.estiloHeader}>
        <p style={estilo.tituloHeader}>Confeitaria Doce Sabor</p>
      </header>

      <div style={estilo.conteudo}>
        <p style={estilo.subtitulo}>
          <strong>Explore receitas incríveis e fáceis de fazer!</strong> Descubra pratos deliciosos para todos os gostos! e surpreenda-se com novas criações.
          <strong> Aqui e comece a cozinhar agora mesmo!</strong>
        </p>
      </div>

      <div style={estilo.subConteudo}>
        <p style={estilo.subTexto}> Aqui você verá a lista <br />de receitas cadastradas.</p>
        <button onClick={irParaCadastro} className="estiloButton POST">
          Voltar para Cadastro
        </button>
      </div>

      <div style={estilo.boxCard}>
        {/* CORREÇÃO 3: Agora a variável 'receitas' existe e pode ser mapeada */}
        {receitas && receitas.length > 0 ? (
          receitas.map((receita) => (
            <article key={receita.id} style={estilo.card}>
              <h2 style={{ color: 'black', marginTop: 0 }}>{receita.titulo}</h2>
              <p style={{ color: 'black' }}><strong>Ingredientes:</strong> {receita.ingredientes}</p>
              <p style={{ color: 'black' }}><strong>Categoria:</strong> {receita.categoria?.nome || receita.categoria}</p>
              <p style={{ color: 'black' }}><strong>Tempo de Preparo:</strong> {receita.tempoPreparo} </p>
              <section style={estilo.padraoButton}>
                <button style={{ ...estilo.editar, ...estilo.button }}>Editar</button>
                <button style={{ ...estilo.delete, ...estilo.button }}>Excluir</button>
              </section>

            </article>

          ))
        ) : (
          <p>Nenhuma receita encontrada ou carregando...</p>
        )}
      </div>
    </div>
  );
}

const estilo = {
  body: {
    margin: 0,
    padding: 0,
    width: '100%',
    minHeight: '100vh', // Alterado para minHeight para não cortar o fundo
    backgroundColor: '#f1f1f1',
    fontFamily: 'Arial, sans-serif',
  },
  estiloHeader: {
    width: '100%',
    height: '50vh',
    backgroundImage: `url(${ImgFundo})`,
    padding: '20px 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  tituloHeader: {
    color: 'white',
    fontSize: '50px',
    padding: '20px 30px',
    background: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '16px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(5px)',
    border: '5px solid rgba(161, 161, 161, 0.67)',
    fontFamily: 'Georgia, serif',
  },
  conteudo: {
    padding: '68px 150px',
    backgroundColor: '#ffc94c',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: '40rem',
  },
  subtitulo: {
    fontSize: '20px',
  },
  subConteudo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '15px',
    padding: '60px 0',
    backgroundColor: '#c4c4c4ff',
    alignItems: 'center'
  },
  subTexto: {
    fontSize: '30px',
    margin: 0
  },
  boxCard: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    padding: '40px 20px 90px 20px',
    backgroundColor: '#c4c4c4ff',
  },
  card: {
    width: '300px', // Ajustado para ser mais responsivo
    minHeight: '200px', // minHeight evita que o texto saia do card
    backgroundColor: '#eeb64eff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
  },
  padraoButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gpa:'10px',
  },
  button: {
    padding: '10px 20px',
    marginLeft: '10px',
    border: 'none',
    borderRadius: '5px',  
    fontSize: '15px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  delete: {
    backgroundColor: '#ff4c4c',
    color: 'white',},
  editar: {
    backgroundColor: '#3583b1ff',
    color: 'white',
  }
}

export default ListagemPage;