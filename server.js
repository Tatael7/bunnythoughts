const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("app/public"));

app.listen(PORT, function() {
    console.log(`app is listening on por ${PORT}`);
});