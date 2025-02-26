<?php

class Vaisseau {
    protected $nom;
    protected $type;
    protected $taille;

    public function __construct(String $nom, Float $taille)
    {
        $this->nom = $nom;
        $this->taille = $taille;
    }
}