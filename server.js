const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("HOME");
});

app.get("/greeting/:name", (req, res) => {
  res.send(`Whats up, ${req.params.name}`);
});

const port = 3001;
app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
