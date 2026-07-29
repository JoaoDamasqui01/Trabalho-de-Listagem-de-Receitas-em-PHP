import React, { useEffect } from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
// Importei uma suposta função 'atualizarReceita'. Certifique-se de que o nome bate com o seu arquivo da API!
import { cadastrarReceita, listarCategorias, atualizarReceita } from './AXIO/conexaoAPI';
import ListagemPage from './listagemPage';
import './App.css';

// Criamos um componente interno para o Formulário para podermos usar os Hooks de rota (useLocation, useNavigate) de forma limpa
function FormularioPage({ categorias, loading, buscarCategorias }) {
  const location = useLocation();
  const navigate = useNavigate();

  const [idReceita, setIdReceita] = React.useState(null);
  const [titulo, setTitulo] = React.useState('');
  const [tempoPreparo, setTempoPreparo] = React.useState('');
  const [ingredientes, setIngredientes] = React.useState('');
  const [idCategorias, setIdCategorias] = React.useState('');
  const [modoEdicao, setModoEdicao] = React.useState(false);

  // useEffect para verificar se viemos da página de listagem através do botão "Editar"
  useEffect(() => {
    if (location.state && location.state.receitaParaEditar) {
      const receita = location.state.receitaParaEditar;
      setIdReceita(receita.id);
      setTitulo(receita.titulo);
      setTempoPreparo(receita.tempoPreparo);
      setIngredientes(receita.ingredientes);
      
      // Garante que o ID da categoria vire String para funcionar corretamente no <select>
      const catId = receita.idCategorias?.id || receita.idCategoria?.id || receita.idCategorias;
      setIdCategorias(catId ? String(catId) : '');
      
      setModoEdicao(true);
    }
  }, [location.state]);

  const enviarReceita = async (e) => {
    e.preventDefault();

    if (!titulo || !tempoPreparo || !ingredientes) {
      alert('Preencha todos os campos de texto!');
      return;
    }

    if (!idCategorias || idCategorias === '') {
      alert('Selecione uma categoria!');
      return;
    }

    try {
      const idCategoriaNumero = parseInt(idCategorias, 10);

      if (isNaN(idCategoriaNumero) || idCategoriaNumero <= 0) {
        alert('Categoria inválida!');
        return;
      }

      const dadosReceita = {
        titulo: titulo.trim(),
        ingredientes: ingredientes.trim(),
        tempoPreparo: tempoPreparo.trim(),
        idCategorias:{ id: idCategoriaNumero }
      };

      if (modoEdicao) {
        // --- AÇÃO DE ATUALIZAR ---
        console.log(`Update receita ID ${idReceita}:`, dadosReceita);
        await atualizarReceita(idReceita, dadosReceita);
        alert('✅ Receita atualizada com sucesso!');
        navigate('/listagem'); // Redireciona de volta para a listagem atualizada
      } else {
        // --- AÇÃO DE CADASTRAR ---
        console.log('📤 Enviando nova receita:', dadosReceita);
        await cadastrarReceita(dadosReceita);
        alert('✅ Receita cadastrada com sucesso!');
        limparFormulario();
      }
    } catch (error) {
      console.error('❌ Erro:', error.response);
      if (error.response?.data) {
        alert(`❌ Erro: ${error.response.data}`);
      } else {
        alert(`❌ Erro ao ${modoEdicao ? 'atualizar' : 'cadastrar'} receita!`);
      }
    }
  };

  const limparFormulario = () => {
    setTitulo('');
    setTempoPreparo('');
    setIngredientes('');
    setModoEdicao(false);
    setIdReceita(null);
    if (categorias.length > 0) {
      // Tenta pegar dinamicamente o ID do primeiro elemento
      const padraoId = categorias[0].id || categorias[0].idCategorias;
      setIdCategorias(String(padraoId));
    } else {
      setIdCategorias('');
    }
    // Limpa o estado da rota para não reativar a edição ao limpar o formulário
    navigate('/', { replace: true, state: {} });
  };

  return (
    <div className="body">
      <div className="cabecalho">
        <h1 className="textHome">Culinária Extravagante</h1>
      </div>

      <div className="conteudo">
        <h2 className="titulo">Bem-vindo à nossa confeitaria!</h2>
        <div className="paragrafo">
          <p>Descubra uma variedade de doces e sobremesas deliciosas feitas com ingredientes frescos e de alta qualidade.</p>
          <p>Nossa paixão é criar experiências culinárias inesquecíveis para você.</p>
        </div>
      </div>

      <div className="formulario">
        <h2 className="textoForm">
          {modoEdicao ? (
            <span>Você está editando a receita: <strong>{titulo}</strong></span>
          ) : (
            <span>
              Temos uma lista de Receitas disponíveis para o seu agrado. <br />
              Caso tenha uma receita criativa e nutritiva, compartilhe conosco no formulário abaixo.
            </span>
          )}
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
              required
            >
              <option value="">Selecione uma categoria</option>
              {categorias.map(cat => {
                const idReal = cat.id || cat.idCategorias;
                return (
                  <option key={idReal} value={idReal}>
                    {cat.tipoCategorias}
                  </option>
                );
              })}
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
              <button type="submit" className={`estiloButton POST ${modoEdicao ? 'EDITAR-BTN' : ''}`}>
                {modoEdicao ? 'Salvar Alterações' : 'Enviar Receita'}
              </button>
              <Link to="/listagem" className="estiloButton GET">
                Ver Receitas
              </Link>
              <button
                type="button"
                className="estiloButton RESET"
                onClick={limparFormulario}
              >
                {modoEdicao ? 'Cancelar' : 'Limpar'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

// O componente principal App apenas gerencia a rota e o estado das categorias compartilhadas
function App() {
  const [categorias, setCategorias] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    buscarCategorias();
  }, []);

  const buscarCategorias = async () => {
    try {
      setLoading(true);
      const dados = await listarCategorias();
      setCategorias(dados);
    } catch (error) {
      console.error('❌ Erro ao carregar categorias:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Routes>
      {/* Rota principal contendo a lógica do formulário híbrido */}
      <Route path="/" element={
        <FormularioPage 
          categorias={categorias} 
          loading={loading} 
          buscarCategorias={buscarCategorias} 
        />
      } />

      {/* Rota de listagem */}
      <Route path="/listagem" element={<ListagemPage />} />
    </Routes>
  );
}

export default App;
