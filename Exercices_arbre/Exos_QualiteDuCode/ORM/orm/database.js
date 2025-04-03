import Knex from "knex";

export let knex = Knex({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    database: "orm",
    user: "root",
    password: "ServBay.dev",
  },
  debug: false,
});
