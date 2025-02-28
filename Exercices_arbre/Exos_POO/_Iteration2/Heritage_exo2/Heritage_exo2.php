<?php

// Declaration de l'interface 'Compte'
interface Compte
{
    public function deposer($montant);
    public function retirer($montant);
    public function getBalance();
}

class CompteEnLigne implements Compte
{
    #[\Override]
    public function deposer($montant) {
        
    }

    #[\Override]
    public function retirer($montant) {
        
    }

    #[\Override]
    public function getBalance() {
        
    }
}

?>

