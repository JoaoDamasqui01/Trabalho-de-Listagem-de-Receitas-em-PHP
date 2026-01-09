import axios from 'axios';

// URL base da sua API Spring Boot
const API_BASE = 'http://localhost:8080';

// Configuração do Axios
const api = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  }
});

// ========== RECEITAS ==========

// POST - Cadastrar receita
export const cadastrarReceita = async (receita) => {
  try {
    const response = await api.post('/receitas/api', receita);
    return response.data;
  } catch (error) {
    console.error('Erro ao cadastrar receita:', error);
    throw error;
  }
};

// GET - Listar todas as receitas
export const listarReceitas = async () => {
  try {
    const response = await api.get('/receitas/api');
    return response.data;
  } catch (error) {
    console.error('Erro ao listar receitas:', error);
    throw error;
  }
};

// DELETE - Excluir receita
export const excluirReceita = async (id) => {
  try {
    await api.delete(`/receitas/api/${id}`);
  } catch (error) {
    console.error('Erro ao excluir receita:', error);
    throw error;
  }
};

// PUT - Atualizar receita
export const atualizarReceita = async (id, receita) => {
  try {
    const response = await api.put(`/receitas/api/${id}`, receita);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar receita:', error);
    throw error;
  }
};

// ========== CATEGORIAS ==========

// GET - Listar categorias
export const listarCategorias = async () => {
  try {
    const response = await api.get('/categorias');
    return response.data;
  } catch (error) {
    console.error('Erro ao listar categorias:', error);
    throw error;
  }
};

export default api;