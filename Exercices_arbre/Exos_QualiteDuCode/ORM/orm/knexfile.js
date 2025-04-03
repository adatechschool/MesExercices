module.exports = {
  development: {
    client: "mysql2",
    connection: {
      host: "127.0.0.1",
      port: 3306,
      user: "root",
      password: "ServBay.dev",
      database: "orm",
    },
  },
};

// module.exports = {
//   client: "mysql",
//   connection: process.env.DATABASE_URL || {
//     user: "root",
//     database: "orm",
//     password: "ServBay.dev",
//   },
// };
