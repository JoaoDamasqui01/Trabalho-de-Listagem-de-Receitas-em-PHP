import React, { useEffect } from 'react';
import { cadastrarReceita, listarCategorias } from './AXIO/conexaoAPI';
import './App.css';

function App() {
  // Estados do formulário
  const [titulo, setTitulo] = React.useState('');
  const [tempoPreparo, setTempoPreparo] = React.useState('');
  const [ingredientes, setIngredientes] = React.useState('');
  const [idCategorias, setIdCategorias] = React.useState('');
  
  // Lista de categorias
  const [categorias, setCategorias] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  // Buscar categorias ao carregar a página
  useEffect(() => {
    buscarCategorias();
  }, []);

  // GET - Buscar categorias
  const buscarCategorias = async () => {
    try {
      console.log('🔍 Buscando categorias...');
      setLoading(true);
      
      const dados = await listarCategorias();
      
      console.log('✅ Categorias recebidas:', dados);
      setCategorias(dados);
      
      // IMPORTANTE: Define primeira categoria como padrão
      if (dados && dados.length > 0) {
        console.log('🎯 Definindo categoria padrão:', dados[0].idCategorias);
        setIdCategorias(String(dados[0].idCategorias)); // Converte para string
      }
    } catch (error) {
      console.error('❌ Erro:', error);
      alert('Erro ao carregar categorias!');
    } finally {
      setLoading(false);
    }
  };

  // POST - Enviar receita
  const enviarReceita = async (e) => {
    e.preventDefault();

    // Validação forte
    if (!titulo || !tempoPreparo || !ingredientes) {
      alert('Preencha todos os campos de texto!');
      return;
    }

    if (!idCategorias || idCategorias === '' || idCategorias === 'null') {
      alert('Selecione uma categoria!');
      return;
    }

    try {
      const idCategorias = parseInt(idCategorias);

      const novaReceita = {
        titulo: titulo.trim(),
        ingredientes: ingredientes.trim(),
        tempoPreparo: tempoPreparo.trim(),
        idCategorias: idCategorias.trim() // Garante que é número
      };

      console.log('📤 Enviando receita:', novaReceita);


      await cadastrarReceita(novaReceita);
      alert('✅ Receita cadastrada com sucesso!');
      limparFormulario();

    } catch (error) {

      console.erro
      r('❌ Detalhes do erro:', error.response);  
      if (error.response?.data) {
        alert(`❌ Erro: ${error.response.data}`);
      } else {
        alert('❌ Erro ao cadastrar receita!');
      }
    }
  };

  // Limpar formulário
  const limparFormulario = () => {
    setTitulo('');
    setTempoPreparo('');
    setIngredientes('');
    if (categorias.length > 0) {
      setIdCategorias(categorias[0].idCategorias);
    }
  };

  return (
    <div className="body">
      <div className="cabecalho">
        <h1 className="textHome">Culinária Extravagante</h1>
      </div>

      <div className="conteudo">
        <h2 className="titulo">Bem-vindo à nossa confeitaria!</h2>
        <div className="paragrafo">
          <p>Descubra uma variedade de doces e sobremesas deliciosas feitas com ingredientes frescos e de alta qualidade. 
          Nossa paixão é criar experiências culinárias inesquecíveis para você.</p>
          <p>Descubra uma variedade de doces e sobremesas deliciosas feitas com ingredientes frescos e de alta qualidade. 
          Nossa paixão é criar experiências culinárias inesquecíveis para você.</p>
        </div>
      </div>

      <div className="formulario">
        <h2 className="textoForm">
          Temos uma lista de Receitas disponíveis para o seu agrado. <br />
          Caso tenha uma receita criativa e nutritiva, compartilhe conosco no formulário abaixo.
        </h2>

        {loading ? (
          <p>Carregando categorias...</p>
        ) : (
          <form className="formReceitas" onSubmit={enviarReceita}>
            <label className="labelForm">Nome da Receita:</label>
            <input  
              className="inputForm" 
              type="text" 
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              placeholder="Ex: Bolo de Chocolate"
              maxLength="40"
              required
            />

            <label className="labelForm">Tempo de Preparo:</label>
            <input 
              className="inputForm" 
              type="text" 
              value={tempoPreparo}
              onChange={(e) => setTempoPreparo(e.target.value)}
              placeholder="Ex: 30 minutos"
              required
            />

            <label className="labelForm">Categoria:</label>
            <select 
              className="inputForm" 
              value={idCategorias}
              onChange={(e) => setIdCategorias(e.target.value)}
         
            >
              <option value="">Selecione uma categoria</option>
              {categorias.map(cat => (
                <option key={cat.idCategorias} value={cat.idCategorias}>
                  {cat.tipoCategorias}
                </option>
              ))}
            </select>

            <label className="labelForm">Ingredientes:</label>
            <textarea 
              className="inputForm" 
              rows="4" 
              value={ingredientes}
              onChange={(e) => setIngredientes(e.target.value)}
              placeholder="Liste os ingredientes..."
              maxLength="200"
              required
            />

            <div className="botoes">
              <button type="submit" className="estiloButton POST">
                Enviar Receita
              </button>
              <button type="button" className='estiloButton GET'>Ver Receitas</button>
              <button 
                type="button" 
                className="estiloButton RESET" 
                onClick={limparFormulario}
              >
                Limpar
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default App;