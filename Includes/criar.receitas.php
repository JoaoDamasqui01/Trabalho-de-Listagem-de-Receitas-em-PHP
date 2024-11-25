<?php
    include_once("conexao.php");  // Verifique se o caminho está correto

        // Falta um sinal de "=" para a variável $ingredientes. Corrigido aqui:
        $idCategorias = mysqli_real_escape_string($conn, $_POST['idCategorias']);
        $titulo = mysqli_real_escape_string($conn, $_POST['titulo']);
        $ingredientes = mysqli_real_escape_string($conn, $_POST['ingredientes']); // Corrigido
        $tempo_preparo = mysqli_real_escape_string($conn, $_POST['tempo_preparo']);

        $query = "SELECT idCategorias FROM categorias WHERE idCategorias = '$idCategorias'";
        $result = mysqli_query($conn, $query);

        // Corrigindo a consulta SQL (sem vírgula extra)
        if (mysqli_num_rows($result) > 0) {
            // A categoria existe, podemos inserir a receita
            $sql = "INSERT INTO receitas (idCategorias, titulo, ingredientes, tempo_preparo) 
                    VALUES ('$idCategorias', '$titulo', '$ingredientes', '$tempo_preparo')";
    
            if (mysqli_query($conn, $sql)) {
                $idReceita = mysqli_insert_id($conn);
                header("Location: ../index.php?tipo=sucesso&mensagem=Receita cadastrada com sucesso&idReceita=$idReceita");
            } else {
                header("Location: ../index.php?tipo=erro&mensagem=Erro ao cadastrar receita");
            }
        } else {
            echo "Erro: A categoria especificada não existe!";
        }
?>
