const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("HOME");
});

// app.get("/greeting/:name", (req, res) => {
//   res.send(`Whats up, ${req.params.name}`);
// });

app.get("/tip/:total/:tipPercentage", (req, res) => {
  res.send(
    `You must tip $${
      parseInt(req.params.total) * (parseInt(req.params.tipPercentage) / 100)
    }`
  );
});

const port = 3001;
app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
