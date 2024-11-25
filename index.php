<?php
  include_once("Includes\conexao.php");
?>


<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="Style\index.css">
  <title>Meu Livro de Receitas</title>
</head>
<body>
    <header>
        <h1 id="receitas">Culinaria Extravagante</h1>
    </header>
    <aside>
      <section id="box">
        <span id="comida">Cansou de comer sempre a mesma coisa?</span>
        <p><br>Nosso site te oferece um mundo de sabores e receitas incríveis para você explorar e se deliciar. <br>Do clássico ao mais exótico, temos a receita perfeita para cada ocasião. Experimente agora e surpreenda seus convidados!</p>
      </section>
    </aside>

    <section class="boxForm">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <p id="fromText">Temos uma lista de Receitas disponíveis para o seu agrado.
              <br>
              Caso tenha uma receita criativa e nutritiva, compartilhe conosco no formulário abaixo.</p>
          </div>
        </div>


        <?php
          if (isset($_GET['mensagem'])) {  
            if($_GET['tipo']=='sucesso'){
              echo '<div class="row">
                      <div class="">
                        <div class="alert alert-success" role="alert">
                          ' . $_GET['mensagem'] . '
                        </div>
                      <div>
                    </div>';
            }
            else{
              echo '<div class="alert alert-danger" role="alert">
                      ' . $_GET['mensagem'] . '
                    </div>';
            }
          }
        ?>
            <form action="Includes/criar.receitas.php" method="POST" >
              <article class="col-md-6">
                <label for="titulo" class="form-label">Título da Receita</label>
                <input type="text" class="form-control" name="titulo" id="titulo" requerid>
              </article>

              <article class="col-md-6">
                <label for="TempoPreparo" class="form-label">Tempo de Preparo</label>
                <input type="text" class="form-control" name="tempo_preparo" id="tempo_preparo" requerid>
              </article>
              <article class="col-md-6">
                <label class="form-label">Categorias</label>
                 <select class= "form-select" name="idCategorias" id="categoria">
                    <?php
                        $sql = "SELECT idCategorias, tipoCategorias FROM categorias";
                        $result = mysqli_query($conn, $sql);
                        while ($row = mysqli_fetch_assoc($result)) {
                          echo "<option value='" . $row['idCategorias'] . "'>" . $row['tipoCategorias'] . "</option>";
                        } 
                    ?>
                  </select>
              </article>
              <br>
              <article class="col-md-6">
                <label for="descricao" class="form-label">Ingredientes</label>
                <textarea class="form-control" name ="ingredientes"  id="ingredientes" rows="5"></textarea>
              </article>
              <br>
              <article class="col-md-6 d-flex justify-content-space-between mb-3" >
                <button id="btn-add-receita" type="submit" class="btn btn-success">Salvar Receita</button>
                <a class="btn btn-success" Style="" href="lista_Receitas.php">
                    Ver Receitas
                </a>
              </article>
          </form>  

      </div>
    </section>
  <script src="JavaScript\Script.js"></script>
</body>
</html>