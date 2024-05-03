<?php
// Dados de conexão com o banco de dados
$servername = "";
$username = "";
$password = "";
$dbname = "";

// Tentativa de conexão com o banco de dados
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifique se ocorreu algum erro durante a conexão
if ($conn->connect_error) {
    die("Erro na conexão com o banco de dados: " . $conn->connect_error);
}

echo "Conexão bem-sucedida com o banco de dados!";
?>
