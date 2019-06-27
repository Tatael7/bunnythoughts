const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.listen(PORT, function() {
    console.log(`app is listening on por ${PORT}`);
});