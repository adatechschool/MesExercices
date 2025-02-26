<?php

class Vaisseau {
    protected $nom;
    protected $type;
    protected $taille;
}

class Intercepteur extends Vaisseau {
    private $nombre_canons;
    private $nombre_canons_charges;

    public function __construct(String $nom, Float $taille)
    {
        // Prend le nom en parametre et assigne le a la propriété nom de l'objet.
        $this->nom = $nom;
        $this->taille = $taille;
        $this->type = "Intercepteur";
        $this->nombre_canons = 2;
        // Permet de definir que chaque canons est chargés.
        $this->nombre_canons_charges = $this->nombre_canons;
    }

    public function tire()
    {
        if($this->nombre_canons_charges > 0) {
            $this->nombre_canons_charges -= 1;
            echo "Piou piou \n";
        } else {
            throw new Exception("Ca tire pas, recharge !", 1);
        }

    }

    public function recharge()
    {
        // On recharge les canons au max selon le nombre de canons maximum.
        $this->nombre_canons_charges = $this->nombre_canons;
    }
}

class Croiseur extends Vaisseau {
    private $capacite_transport;
    private $capacite_actuelle = 0;

    public function __construct(String $nom, Float $taille, Int $capacite_transport)
    {
        // Prend le nom en parametre et assigne le a la propriété nom de l'objet.
        $this->nom = $nom;
        $this->taille = $taille;
        $this->type = "Croiseur";
        $this->capacite_transport = $capacite_transport;
    }

    public function charger_troupes(Int $troupes)
    {
        if(($this->capacite_actuelle + $troupes) <= $this->capacite_transport) {
            $this->capacite_actuelle += $troupes;
        } else {
            throw new Exception("Trop de personnes, ca ne rentrera pas", 1);
        }
    }

    public function decharger_troupes(Int $troupes)
    {
        if(($this->capacite_actuelle - $troupes) >= 0) {
            $this->capacite_actuelle -= $troupes;
        } else {
            throw new Exception("Tu tente de faire sortir du vent.", 1);
        }
    }
}

function displayCapacites($vaisseau) {
    //@TODO, réussir a afficher uniquement les méthodes et pas les propriétés
    var_dump($vaisseau);
}


$acclamator1 = new Croiseur('Acclamator', 752, 700);
$acclamator2 = new Croiseur('Acclamator Bis', 752, 700);

$xwing = new Intercepteur('X-wing', 12.5);

$acclamator1->charger_troupes(600);
$acclamator1->charger_troupes(100);

$xwing->tire();
$xwing->tire();
$xwing->recharge();
$xwing->tire();
$xwing->tire();



var_dump($xwing);
