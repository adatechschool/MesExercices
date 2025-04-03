/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("orders").del();
  await knex("orders").insert([
    {
      date: new Date("2025-04-01T10:00:00"),
      product: "Affiche Atacama",
    },
    {
      date: new Date("2025-04-02T14:30:00"),
      product: "Gravure Lagon",
    },
    {
      date: new Date("2025-04-03T09:15:00"),
      product: "Carte Tapir JS",
    },
  ]);
};
