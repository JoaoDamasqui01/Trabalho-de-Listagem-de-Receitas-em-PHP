<?php

    $host       = "localhost";
    $user       = "root";
    $password   = "";
    $database   = "confeitaria3";

    $conn 		= mysqli_connect($host, $user, $password, $database);

    if($conn != $conn){
        echo("Falha na conexão: " . mysqli_connect_error());
    } 
?>