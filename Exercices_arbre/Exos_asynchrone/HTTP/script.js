const express = require("express");
const app = express();
const port = 3000;

const database = ["html", "css"];

app.use(express.json());

// Ajoute un langage dans "database"
app.post("/languages", (req, res) => {
  database.push(req.body.language);
  res.status(201).json({ language: req.body.language });
});

app.get("/languages", (req, res) => {
  res.json(database);
});

app.put("/languages/:name", (req, res) => {
  var indexToChange = database.indexOf(require.name);
  database[indexToChange] = req.body.language;
  res.status(201).json({ language: req.body.language });
});

app.delete("/languages", (req, res) => {
  var toDelete = req.body.language;
  var indexToChange = database.indexOf(toDelete);
  database.splice[indexToChange];
  res.status(201).json(database);
});

// TODO: GET /languages (renvoie la liste des langages de la database en json)
// TODO: PUT /languages/:name (remplace le langage passé dans l'url par celui passé dans le body, par exemple /languages/html avec {"language": "c++"}, remplace html par c++ dans la database)
// TODO: DELETE /languages (supprime le langage passé dans le body, par exemple {"language": "c++"})

// 💡 N'hésite pas à aller sur MDN pour choisir les bonnes méthodes de array pour modifier database

app.listen(port, () => {
  console.log(`Server started on <http://localhost>:${port}`);
});
