<?php

// var_dump($_POST);
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Document</title>
</head>
<body>
    <div class="result">
        <h1>Registration</h1>
        <p>Username : <?php echo $username; ?></p>
        <p>Email : <?php echo $email; ?></p>
        <p>Password : <?php echo $password; ?></p>
    </div>
</body>
</html>