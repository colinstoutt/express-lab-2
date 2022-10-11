const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("HOME");
});

app.get("/greeting/:name", (req, res) => {
  res.send(`Whats up, ${req.params.name}`);
});

app.get("/tip/:total/:tipPercentage", (req, res) => {
  res.send(
    `You must tip $${
      parseInt(req.params.total) * (parseInt(req.params.tipPercentage) / 100)
    }`
  );
});

app.get("/magic/:question", (req, res) => {
  const eightBall = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
  ];
  const random = Math.floor(Math.random() * eightBall.length);
  res.send(`<p>${req.params.question}</p> <h1>${eightBall[random]}</h1>`);
  console.log(req);
});

const port = 3001;
app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
