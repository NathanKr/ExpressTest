const request = require("supertest");

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Express");
});

request(app)
  .get("/")
  .expect("Hello Express")
  .end((err, res) => {
    if (err) throw err;
    else console.log("success");
  });
