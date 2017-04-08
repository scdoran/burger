// Set up MySQL connection.
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'burgers_db'
  });
};
// var connection = mysql.createConnection({
//   port: 3306,
//   host: "y2w3wxldca8enczv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
//   user: "vdmwi7l5eqghx2qw",
//   password: "bn2q6765y9bfia20",
//   database: "burgers_db"
// });

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
