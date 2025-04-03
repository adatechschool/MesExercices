import express from "express";
import { knex } from "./database.js";
const app = express();
const port = 3306;

app.get("/users", (req, res) => {
  knex
    .select()
    .from("users")
    .then((result) => {
      res.json(result);
    });
});

app.get("/orders", (req, res) => {
  knex
    .select()
    .from("orders")
    .then((result) => {
      res.json(result);
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
