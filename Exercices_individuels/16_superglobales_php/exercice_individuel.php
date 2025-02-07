<?php
// Vérifie si un nom est passé en GET
if (isset($_GET['first_name'])) { // vérifie si une valeur est présente pour first_name dans l’URL
    $first_name = htmlspecialchars($_GET['first_name']); //si first_name est trouvé en GET, sa valeur est stockée dans $first_name
}                                                       //htmlspecialchars() est utilisé pour empêcher les attaques XSS en convertissant 
                                                        //les caractères spéciaux HTML (<, >, &, etc.) en entités HTML (&lt;, &gt;, etc.)


// Sinon, vérifie si un nom est soumis via POST
//Si first_name n’est pas trouvé dans $_GET, on vérifie s’il est présent dans $_POST 
//(c’est-à-dire s’il a été soumis via un formulaire avec la méthode POST)
elseif (isset($_POST['first_name'])) { 
    $first_name = htmlspecialchars($_POST['first_name']);
} 
// sinon, affiche "anonyme"
else {
    $first_name = "anonyme";
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice PHP - Superglobales</title>
</head>
<body>
    <h1><?php echo "Bonjour " . $first_name; ?></h1>
    <form action="exercice.php" method="post">
 <p>Votre nom : <input type="text" name="first_name" /></p>
 <p><input type="submit" value="OK"></p>
</form>
</body>
</html>