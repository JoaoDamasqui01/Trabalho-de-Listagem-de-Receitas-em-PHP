const form = document.querySelector("#form");
const categoriaSelect = document.querySelector("#categoria");
const tituloInput = document.querySelector("#titulo");
const tempoPreparo = document.querySelector("#tempo_preparo");
const ingredientesInput = document.querySelector("#ingredientes");

form.addEventListener("submit", (event)=> {
    event.preventDefault();

    if(categoriaSelect.value == ""){
        alert("Informe o nome da receita");
        return;
    }
    if(tempoPreparo.value == ""){
        alert("Tempo de Preparo?");
        return;
    }
    if(ingredientesInput.value == ""){
        alert("Informe os ingredientes");
        return;
    }

    form.submit();
})

function extrairIngredientes(texto) {
    // Remover espaços em branco no início e no final da string
    texto = texto.trim();
  
    // Dividir a string em um array de ingredientes
    const ingredientes = texto.split(', ');
  
    // Criar um array para armazenar os ingredientes com nome e quantidade
    const ingredientesComQuantidade = [];
  
    // Iterar sobre cada ingrediente
    ingredientes.forEach(ingrediente => {
      // Remover parênteses e dividir o nome e a quantidade
      const [nome, quantidade] = ingrediente.replace(/[()]/g, '').split(' ');
  
      // Validar a quantidade (opcional)
      if (isNaN(quantidade)) {
        console.error('Quantidade inválida para o ingrediente:', nome);
        return;
      }
  
      // Adicionar o ingrediente ao array de resultados
      ingredientesComQuantidade.push({ nome, quantidade });
    });
  
    return ingredientesComQuantidade;
  }