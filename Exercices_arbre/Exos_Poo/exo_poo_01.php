<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Film</title>
</head>
<body>
<?php


//print_r pour afficher dans la console

class Realisatrice {  //creation de la classe realisatrice
    public string $prenom;
    public string $nom;
    public int $dateDeNaissance;
    public int $age;

    public function __construct(string $prenom, string $nom, int $dateDeNaissance) {
        $this->prenom = $prenom;
        $this->nom = $nom;
        $this->dateDeNaissance = $dateDeNaissance;
    }

    public function calculerAge(): int {
    $age = date("Y") - $this->dateDeNaissance;
    return $age;
    }

    public function presenterRealisatrice(): string {
        $age = $this->calculerAge();
        return "$this->prenom $this->nom, née en $this->dateDeNaissance ($age ans)";
    }
}

class Film {  //creation de la classe film
    public string $nom;
    public int $dateDeSortie;
    public Realisatrice $realisatrice;
    public GenreFilm $genre;
    
    public function __construct(string $nom, int $dateDeSortie, Realisatrice $realisatrice, GenreFilm $genre) {
        $this->nom = $nom;
        $this->dateDeSortie = $dateDeSortie;
        $this->realisatrice = $realisatrice;
        $this->genre = $genre;
    }

    public function presenterFilm(): string {
        return "Le film \"$this->nom\" est sorti en $this->dateDeSortie et a été réalisé par " . $this->realisatrice->presenterRealisatrice() . " et appartient au genre " . $this->genre->value . ".";
    }
}

class Films {  //creation de la classe Films (tableau de films)
    private array $listeFilms = [];

    public function __construct(array $films = []) { // Constructeur qui peut prendre une liste initiale de films
        $this->listeFilms = $films;
    }
    
    public function ajouterFilm(Film $film): void { // Méthode pour ajouter un film à la collection
        $this->listeFilms[] = $film;
    }
    
    public function getFilms(): array { // Méthode pour obtenir tous les films
        return $this->listeFilms;
    }

    public function getNombreFilms(): int {
        return count($this->listeFilms); // Méthode pour obtenir le nombre total de films
    }
    
    public function afficherFilms(): string { // Méthode pour afficher tous les films
        $result = "";
        foreach ($this->listeFilms as $film) {
            $result .= $film->presenterFilm() . "<br>";
        }
        return $result;
    }
}

class Client { //creation de la classe client
    public string $prenom;
    public string $nom;
    private Films $filmsLoues;

    // Constructeur du client
    public function __construct(string $prenom, string $nom) {
        $this->prenom = $prenom;
        $this->nom = $nom;
        $this->filmsLoues = new Films(); // Initialisation de la collection de films loués
    }
    
    public function louerFilm(Film $film): void {  // méthode pour louer un film
        $this->filmsLoues->ajouterFilm($film);  
    }

    public function rendreFilm(Film $film): void {
        $filmsLoues = $this->filmsLoues->getFilms();
        foreach ($filmsLoues as $key => $louedFilm) {
            if ($louedFilm === $film) { // comparaison d'objet
                unset($filmsLoues[$key]); // Supprime le film de la liste
                $this->filmsLoues = new Films(array_values($filmsLoues)); // Réindexation du tableau
                echo "{$this->prenom} {$this->nom} a rendu le film \"{$film->nom}\".<br>";
                return;
            }
        }
        echo "{$this->prenom} {$this->nom} n'a pas loué ce film.<br>";
    }
    
    public function afficherFilmsLoues(): string {  // Méthode pour afficher les films loués
        return "Films loués par {$this->prenom} {$this->nom} :<br>" . 
               $this->filmsLoues->afficherFilms();
    }

    public function getNombreFilmsLoues(): int { // Méthode pour obtenir le nombre de films loués
        return $this->filmsLoues->getNombreFilms();
    }
}

enum GenreFilm: string {
    case Drame = "Drame";
    case Romance = "Romance";
    case Thriller = "Thriller";
    case ScienceFiction = "Science-fiction";
    case Animation = "Animation";
    case Horreur = "Horreur";
    case Comedie = "Comédie";
}

// instanciation des objets

$realisatrice1 = new Realisatrice("Justine", "Triet", 1978);
$film1 = new Film("Anatomie d'une chute", 2023, $realisatrice1, GenreFilm::Thriller);

$realisatrice2 = new Realisatrice("Céline", "Sciamma", 1978);
$film2 = new Film("Portrait de la jeune fille en feu", 2019, $realisatrice2, GenreFilm::Drame);

$realisatrice3 = new Realisatrice("Sofia", "Coppola", 1971);
$film3 = new Film("Lost in Translation", 2003, $realisatrice3, GenreFilm::Drame);

$realisatrice4 = new Realisatrice("Marjane", "Satrapi", 1969);
$film4 = new Film("Persepolis", 2007, $realisatrice4, GenreFilm::Animation);

$client1 = new Client("Ada", "Lovelace");

$client1->louerFilm($film1);
$client1->louerFilm($film2);

echo $film1->presenterFilm() . "<br>"; 
echo $film2->presenterFilm() . "<br>"; 
echo $film3->presenterFilm() . "<br>"; 
echo $film4->presenterFilm() . "<br>";

echo $client1->afficherFilmsLoues();

$client1->rendreFilm($film1); 
$client1->rendreFilm($film3); 
echo $client1->afficherFilmsLoues(); 


?>    
</body>
</html>