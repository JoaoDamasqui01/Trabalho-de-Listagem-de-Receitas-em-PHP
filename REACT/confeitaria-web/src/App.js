import React from 'react';
import home from './Imagem/home.jpg';
import './App.css';


function App() {
  const [titulo, setTitulo] = React.useState('');
  const [tempoPreparo, setTempoPreparo] = React.useState('');
  const [idCategrias, setidCategrias] = React.useState('Bolos');
  const [ingredientes, setIngredientes] = React.useState('');
  return (
    <div className = "body">
      <div className = "cabecalho">
        <h1 className = "textHome">Culinária Extravagante</h1>
      </div>
      <div className = "conteudo">
          <h2 className = "titulo">Bem-vindo à nossa confeitaria!</h2>
          <div className = "paragrafo">
            <p>Descubra uma variedade de doces e sobremesas deliciosas feitas com ingredientes frescos e de alta qualidade. 
            Nossa paixão é criar experiências culinárias inesquecíveis para você.</p>
            <p>
            Descubra uma variedade de doces e sobremesas deliciosas feitas com ingredientes frescos e de alta qualidade. 
            Nossa paixão é criar experiências culinárias inesquecíveis para você.</p>
          </div>
      </div>
      <div className = "formulario">
        <h2 className = "textoForm">Temos uma lista de Receitas disponíveis para o seu agrado. <br></br>Caso tenha uma receita criativa e nutritiva, compartilhe conosco no formulário abaixo.</h2>

        <form className = "formReceitas">
          <label className = "labelForm">Nome da Receita:</label>
          <input  className = "inputForm" type="text" value={titulo} />
          <label className = "labelForm">Tempo de Preparo:</label>
          <input className = "inputForm" type="text" value={tempoPreparo} /> 
          <label className = "labelForm">Categória:</label>
          <select className = "inputForm" value={idCategrias}>
            <option value="Bolos">Bolos</option>
            <option value="Doces">Doces</option>
            <option value="Salgados">Salgados</option>
          </select>
          <label className = "labelForm">Ingredientes:</label>
          <textarea className = "inputForm" value={ingredientes} rows="4" cols="5"></textarea>
          <div className = "botoes">
            <button type="submit" className='estiloButton POST'>Enviar Receita</button>
            <button type="reset" className='estiloButton RESET'>Limpar</button>
            <button type="button" className='estiloButton GET'>Ver Receitas</button>
          </div>
        </form>
      </div>
    </div>
  );
}

{/*const estilo = {
  body: {
    margin: 0,
    padding: 0,
    fontWeight:'bold',
  },
  cabecalho:{
    width: '100%',
    height: '40vh',
    display:'flex',
    backgroundImage: `url(${home})`,
    backgroundSize: 'cover',
    alignItems:'center',
    justifyContent:'center',
  },
  textHome:{  
    color: '#FFFFFF',
    fontSize: '40px',
    padding: '20px',
    borderRadius: '10px', 
    margin:0,
    background: 'rgba(255, 255, 255, 0.33)',
    borderRadius: '16px',
    boxShadow:' 0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter:' blur(10.7px)',
    WebkitBackdropFilter: 'blur(10.7px)',
    border: '5px solid rgba(255, 255, 255, 1)',
  },
  conteudo:{
    backgroundColor: '#ffc94c',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '30px 170px',
  },
  titulo:{
    width:'30%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    paddingReight:'30px', 
    color:'#000000ff',
    fontSize:'30px',
    margin:0,
  },
  paragrafo:{
    display:'flex',
    flexDirection:'column',
    fontWeight: 'normal',
    width:'50%',
  },
  formulario:{
    flex: 1,
    backgroundColor: '#ffdead',
    margin: 'auto',
    width: '100%', 
    height: '80vh',
    padding: '15px 0px',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
  },
  textoForm:{
    color:'#000000ff',
    fontSize:'24px',
    textAlign:'left',
    padding: "40px 0px"
  },
  formReceitas:{
    display:'flex',
    flexDirection:'column',
    width:'38%',
    padding:'15px 30px',
    borderRadius: '20px',
    backgroundColor:'#ffffff',
  },
  labelForm:{
    marginTop:'10px',
    marginBottom:'5px',
    fontWeight:'bold',
  },
  inputForm:{
    padding:'8px',
    borderRadius:'5px',
    border:'1px solid #ccc',
  },
  botoes:{
    display:'flex',
    justifyContent:'space-between',
    marginTop:'15px',
  },
  estiloButton:{
    fontSize:"18px",
    color:'white',
    padding:'10px 20px',
    border:'none',
    borderRadius:'5px',
    cursor:'pointer',
  },
  POST:{
        backgroundColor:'#4CAF50',
  },
  RESET:{
    backgroundColor:'#f44336',
  },
  GET:{
    backgroundColor:'#286bcfff',
  },

};*/}

export default App;
