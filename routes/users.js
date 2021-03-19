import express from "express";

import { v4 as uuid } from "uuid";

let users = [];

const router = express.Router();

router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuid() });

  res.send(`User ${user.username} added to the database`);
});

router.get("/:id", (req, res) => {
  const foundUser = users.find((user) => user.id === req.params.id);
  if (foundUser) {
    res.send(foundUser);
  } else {
    res.status(404).send("User does not exist");
  }
});

router.delete("/:id", (req, res) => {
  const foundUser = users.find((user) => user.id === req.params.id);
  if (foundUser) {
    users = users.filter((user) => user.id !== req.params.id);
    res.send(`user with id ${req.params.id} has been deleted`);
  } else {
    res.status(404).send("User does not exist");
  }
});

router.patch("/:id", (req, res) => {
  const user = users.find((user) => user.id === req.params.id);
  const { username, email, age } = req.body;
  if (username) {
    user.username = username;
    res.send(`username has been updated to ${req.body.username}.`);
  }

  if (email) {
    user.email = email;
    res.send(`email has been updated to ${req.body.email}.`);
  }
  if (age) {
    user.age = age;
    res.send(`age has been updated to ${req.body.age}.`);
  }
});

export default router;
