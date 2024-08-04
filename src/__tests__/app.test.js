const request = require("supertest");
const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

describe("GET /", () => {
  it("should return 200 OK", (done) => {
    request(app).get("/").expect(200, done);
  });
});
