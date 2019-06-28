const connection = require("../config/connection.js");

module.exports = function(app) {
    //get all thoughts
    app.get("/api/all", function(req, res) {
        let dbQuery = "SELECT * FROM thoughts";

        connection.query(dbQuery, function(err, result) {
            if(err) throw err;
            res.json(result);
        });
    });

    app.post("/api/new", function(req, res) {
        console.log("thoughts");
        console.log(req.body);

        let dbQuery = "INSERT INTO thoughts (author, body, created_at) VALUES(?,?,?)";

        connection.query(dbQuery, [req.body, req.author, req.created_at], function(err, result) {
            if(err) throw err;
            console.log("Thoughts saved");
            res.end();
        });
    });
};