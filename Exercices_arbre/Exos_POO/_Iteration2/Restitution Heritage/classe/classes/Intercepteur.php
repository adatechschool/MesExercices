<?php

class Intercepteur extends Vaisseau {
    private $nombre_canons;
    private $nombre_canons_charges;

    public function __construct(String $nom, Float $taille)
    {
        parent::__construct($nom, $taille);
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