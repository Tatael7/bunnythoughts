const mysql = require("mysql");

const connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "P455W0RD",
    database: "chirpy"
});

connection.connect(function(err) {
    if(err) {
        console.log(`err connecting ${err.stack}`);
        return;
    }
    console.log(`connected as ${connection.threadId}`);
});

module.exports = connection;