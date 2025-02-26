<?php

class Export
{
    protected $input_file;
    public function __construct($file_path)
    {
        // Verifier le path du fichier et ajouter son chemin dans $input_file
        if(file_exists($file_path)) {
            $this->input_file = realpath($file_path);
            return true;
        }
        throw new Exception("Cannot find the file at $file_path", 1);
        
    }
}


class CSVExport extends Export
{
    public function export($csv_path)
    {
        // Lire le contenu du fichier JSON
        $jsonData = file_get_contents($this->input_file);
        $dataArray = json_decode($jsonData, true);

        if (!is_array($dataArray) || empty($dataArray)) {
            die("Erreur : Impossible de décoder le JSON ou le fichier est vide.");
        }
        // Ouvrir le fichier CSV en écriture
        $csvHandle = fopen($csv_path, 'w');

        // Écrire l'en-tête (noms des colonnes)
        fputcsv($csvHandle, array_keys($dataArray[0]));

        // Écrire les lignes de données
        foreach ($dataArray as $row) {
            fputcsv($csvHandle, $row);
        }

        // Fermer le fichier CSV
        fclose($csvHandle);
    }
}

class SQLExport extends export
{
    public function exportSomething()
    {

    }

}

$inputCSV = new CSVExport('./input.json');
$inputCSV->export('./csv_export.csv');