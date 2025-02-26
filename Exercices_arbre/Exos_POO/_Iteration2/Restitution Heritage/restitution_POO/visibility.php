<?php

class flan
{
    private $pv = 10;

    public function setPv($newPv)
    {
        if($newPv > 10) {
            throw new Exception("Tu te foutrais pas de ma gueule", 1);
        }
        $this->pv = $newPv;
    }
    public function getPv()
    {
        return "PV : " . $this->pv;
    }
}

$flan = new Flan();
$flan->setPv(1000);

var_dump($flan->getPv());