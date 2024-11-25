<?php
include_once("Includes\conexao.php");

if (!$conn) {
    die("Conexão falhou: " . mysqli_connect_error());
}
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
	<link rel="stylesheet" href="Style\listaReceita.css">
    <title>Receitas</title>
</head>
<body>
	

		<header>
			<h2>Listagem de Receitas</h2>
		</header>
    
	<aside>
		<div class="row d-flex justify-content-center">
			<article class="col-md-7">
				<p><strong>Explore receitas incríveis e fáceis de fazer!</strong> Descubra pratos deliciosos para todos os gostos e surpreenda-se com novas criações. <strong>aqui e comece a cozinhar agora mesmo!</strong></p>
			</article>
		</div>
	</aside>
	
	<div class="container">
		<section class ="row d-flex justify-content-center">
			<div class="col-md-8 ">
				<?php
					// Consulta para pegar todas as receitas com suas respectivas categorias
					$sql = "SELECT receitas.idReceitas, receitas.idCategorias, receitas.titulo, receitas.ingredientes, receitas.tempo_preparo, categorias.tipoCategorias 
					FROM receitas
					INNER JOIN categorias ON categorias.idCategorias = receitas.idCategorias";

					// Executa a consulta
					$resultado = mysqli_query($conn, $sql);

					// Verifica se há receitas cadastradas
					if (mysqli_num_rows($resultado) > 0) {
					// Exibe as receitas em uma lista
					echo "<ul class='list-group'>";
					while ($dados = mysqli_fetch_assoc($resultado)) {
					echo "<li class='list-group-item'>
							<strong class ='titulo'>" . htmlspecialchars($dados['titulo']) . "</strong><br>
							<strong>Categoria:</strong> " . htmlspecialchars($dados['tipoCategorias']) . "<br>
							<strong>Ingredientes:</strong> " . htmlspecialchars($dados['ingredientes']) . "<br>
							<strong>Tempo de Preparo:</strong> " . htmlspecialchars($dados['tempo_preparo']) . "
						</li>";
					}
					echo "</ul>";
					} else {
					echo "<p>Nenhuma receita cadastrada.</p>";
					}

				?>
			</div>
		</section>

    </div>

</body>
</html>
