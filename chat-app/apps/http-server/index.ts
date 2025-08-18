import express from "express";

const app = express();

app.get("/healthcheck", (req, res) => {
  res.send("hello world");
});

app.get("/signup", (req, res) => {
  res.send("hello world");
});

app.get("/signin", (req, res) => {
  res.send("hello world");
}); 

app.get("/char", (req, res) => {
  res.send("hello world");
});