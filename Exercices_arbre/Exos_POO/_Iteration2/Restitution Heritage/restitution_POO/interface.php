<?php

interface Exportable
{
    public function export(string $outputPath = null);
}

abstract class Export
{
    protected string $inputFile;

    public function __construct(string $filePath = null)
    {
        if (!file_exists($filePath)) {
            throw new Exception("Cannot find the file at $filePath");
        }

        $this->inputFile = realpath($filePath);
    }

}

class CSVExport extends Export implements Exportable
{
    public function export(string $csv_path = null)
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

class SQLExport extends Export implements Exportable
{
    public function export(string $sql_path = null)
    {
        
    }
}
