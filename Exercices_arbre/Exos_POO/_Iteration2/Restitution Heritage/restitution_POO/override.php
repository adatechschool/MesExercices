<?php

class Papa
{
    public function doSomething()
    {
        echo "Coucou";
    }
}

class Enfant extends Papa
{
    public function doSomething()
    {
        echo "Do something else";
    }
}

$enfant = new Enfant();

$enfant->doSomething();