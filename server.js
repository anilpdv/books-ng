const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(__dirname + "/dist/books-ng"));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/books-ng/index.html"));
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("app is started listening to port : " + port);
});
