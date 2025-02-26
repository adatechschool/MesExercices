<?php

class Croiseur extends Vaisseau {
    private $capacite_transport;
    private $capacite_actuelle = 0;

    public function __construct(String $nom, Float $taille, Int $capacite_transport)
    {
        parent::__construct($nom, $taille);
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