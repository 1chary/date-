const express = require("express");
const addDays = require("date-fns/add-days");

const app = express();

app.get("/", (request, response) => {
  const today = new Date();
  const result = addDays(
    new Date(today.getFullYear(), today.getMonth(), today.getDate()),
    100
  );
  response.send(
    `${result.getDate()}/${result.getMonth() + 1}/${result.getFullYear()}`
  );
});

module.exports = app;
