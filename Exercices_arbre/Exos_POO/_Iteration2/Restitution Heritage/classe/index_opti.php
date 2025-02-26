<?php
require "./classes/Vaisseau.php";
require "./classes/Intercepteur.php";
require "./classes/Croiseur.php";

function displayCapacites($vaisseau) {
    //@TODO, réussir a afficher uniquement les méthodes et pas les propriétés
    var_dump($vaisseau);
}

$acclamator1 = new Croiseur('Acclamator', 752, 700);
$acclamator2 = new Croiseur('Acclamator Bis', 752, 700);

$xwing = new Intercepteur('X-wing', 12.5);

var_dump($acclamator1);
