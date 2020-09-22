const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`<h1>NO</h1>`);
});

app.get("/bro", (req, res) => {
  res.send("<h1>YES</h1>");
});

app.get("/kuan", (req, res) => {
  res.send(`<h1 style="text-align:center">NO</h1>`);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("Hello world listening on port", port);
});
