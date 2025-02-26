<?php

class Vaisseau{
    protected $nom;
    protected $type;
    protected $taille;
};

class Intercepteur extends Vaisseau{

    private $nombre_canons;
    private $nombre_canons_charges;

        //automatiquement utilisée quand on instancie un objet
        public function __construct(string $nom, float $taille){
            $this->nom = $nom; //prend le nom en paramètre et assigne le à la propriété nom de l'objet.
            $this->type = "Intercepteur";
            $this->taille = $taille;
            $this->nombre_canons = 2;
            $this->nombre_canons_charges = $this->nombre_canons;
    }

    public function tire()
    {   
        if($this->nombre_canons_charges > 0){
        $this->nombre_canons_charges -= 1;
        echo "Tire ! \n";
    } else {
        throw new Exception("Il faut recharger", 1);
    }
    }

    public function recharge()
    {
        // On recharge les canons au max selon le nombre de canons maximum.
        $this->nombre_canons_charges = $this->nombre_canons;
    }
}

class Croiseur extends Vaisseau{

    private $capacite_transport;
    private $capacite_actuelle = 0;

    //automatiquement utilisée quand on instancie un objet
    public function __construct(string $nom, float $taille, int $capacite_transport){
        $this->nom = $nom; //prend le nom en paramètre et assigne le à la propriété nom de l'objet.
        $this->type = "Croiseur";
        $this->taille = $taille;
        $this->capacite_transport = $capacite_transport; //en php, $this = raccourci pour l'objet en cours
    }

    public function charger_troupes(int $troupes)
    {   
        if(($this->capacite_actuelle + $troupes) <= $this -> capacite_transport){
            $this->capacite_actuelle += $troupes;
            return "Le $this->type $this->nom, d'une capacité de $this->capacite_transport soldats, vient de charger une troupe de $troupes soldats.";
        } else {
            throw new Exception("Trop de personnes, ça ne rentrera pas", 1);
        }
    }

    public function decharger_troupes(int $troupes)
    {
        if(($this->capacite_actuelle - $troupes) >= 0){
            $this->capacite_actuelle -= $troupes;
            return "Le $this->type $this->nom, d'une capacité de $this->capacite_transport soldats, vient de décharger une troupe de $troupes soldats.";        } else {
            throw new Exception("Plus personne", 1);
        }
        
    }
}

function afficher_capacite($Vaisseau){
    // return "Le $this->type $this->nom mesure $this->taille mètres.";
    var_dump($Vaisseau);
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