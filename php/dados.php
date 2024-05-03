<?php
// Verifique se o formulário foi submetido
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Conexão com o banco de dados (substitua essas informações com as suas próprias)
    $servername = "localhost";
    $username = "";
    $password = "";
    $dbname = "";

    // Crie uma conexão
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Verifique se a conexão foi bem sucedida
    if ($conn->connect_error) {
        die("Falha na conexão: " . $conn->connect_error);
    }

    // Obtenha os dados do formulário
    $email = $_POST["email"];
    $senha = $_POST["senha"];

    // Consulta SQL para verificar se as credenciais são válidas
    $sql = "SELECT * FROM usuarios WHERE email = '$email' AND senha = '$senha'";
    $result = $conn->query($sql);

    // Verifique se o resultado da consulta contém pelo menos uma linha
    if ($result->num_rows > 0) {
        // Credenciais válidas, redirecione para a página de sucesso
        header("Location: sucesso.php");
        exit;
    } else {
        // Credenciais inválidas, exiba uma mensagem de erro
        echo "Usuário ou senha incorretos.";
    }

    // Feche a conexão
    $conn->close();
}
?>
