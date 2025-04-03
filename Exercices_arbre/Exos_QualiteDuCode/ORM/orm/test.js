const knex = require("knex")(require("./knexfile").development);

knex
  .raw("SELECT 1")
  .then(() => {
    console.log("✅ Connexion à MySQL OK !");
    return knex.destroy();
  })
  .catch((err) => {
    console.error("❌ Erreur connexion :", err);
    knex.destroy();
  });
