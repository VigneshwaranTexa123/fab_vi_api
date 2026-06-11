import mysql from "mysql2";

const db = mysql.createPool({
  host: "3.111.67.90",
  user: "root",
  password: "TexaAdmin",
  database: "fab_vi",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default db.promise();