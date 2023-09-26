import express from "express";
import { v4 as uuidv4 } from "uuid";

export let users = [];

export let getUser = (req, res) => {
  console.log(users);
  res.status(200).send(users);
};

export let createUser = (req, res) => {
  const user = req.body;
  const userWithId = { ...user, id: uuidv4() };
  users.push(userWithId);

  res.send(users);

  console.log("Adicionando mais usuários");
};

export let getUserById = (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);

  res.send(foundUser);
};

export let deleteUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);

  res.send(`${id} == USER REMOVED`);
};

export let patchUser = (req, res) => {
  const { id } = req.params;
  const { firstName, secondName, age } = req.body;

  let user = users.find((user) => user.id === id);

  if (firstName) {
    user.firstName = firstName;
    res.send(user);
  }
  if (secondName) {
    user.secondName = secondName;
    res.send(user);
  }
  if (age) {
    user.age = age;
    res.send(user);
  }

  console.log("Patch!");
};
