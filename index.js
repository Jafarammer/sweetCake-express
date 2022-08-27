const express = require("express");
const app = express();
const port = 8500;
const bodyParser = require("body-parser");
const { default: axios } = require("axios");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let profile = [];

app.get("/profile", (req, res) => {
  res.send(profile);
});

app.post("/profile/add", (req, res) => {
  const { name, email, phoneNumber, password, confirmPassword, id } = req.body;

  if (password !== confirmPassword) {
    res.status(401).send("Password not same!!!");
  } else {
    const isValid = name && email && phoneNumber && password && confirmPassword;
    if (isValid) {
      profile.push({
        id: parseInt(id),
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        password: password,
        confirmPassword: confirmPassword,
      });

      res.status(200).send({
        message: "Data added success",
        data: profile,
      });
    } else {
      res.status(400).send("Input not valid!!!");
    }
  }
});

app.patch("/profile/edit", (req, res) => {
  const { name, email, phoneNumber, password, confirmPassword, id } = req.body;

  const parsingId = parseInt(id);
  if (name) {
    profile[parsingId].name = name;
  }

  if (email) {
    profile[parsingId].email = email;
  }

  if (phoneNumber) {
    profile[parsingId].phoneNumber = phoneNumber;
  }

  if (password) {
    profile[parsingId].password = password;
  }

  if (confirmPassword) {
    profile[parsingId].confirmPassword = confirmPassword;
  }

  res.status(200).send({
    message: "Data changed success",
    data: profile,
  });
});

app.listen(port, () => {
  console.log(`Port running on ${port}`);
});
