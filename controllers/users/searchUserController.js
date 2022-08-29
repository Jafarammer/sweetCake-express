const db = require("../../config/db");
const model = require("../../models/user/searchUserModel");

// all data
const findAllUser = async (req, res) => {
  try {
    const getData = await model.getAllUser();
    res.send({ data: getData.rows, totalData: getData.rowCount });
  } catch (error) {
    res.status(400).send("Any error");
  }
};

// based with id
const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const getData = await model.getById(id);
    res.send({ data: getData.rows, totalData: getData.rowCount });
  } catch (error) {
    res.status(400).send("Any error");
  }
};

// based with name
const findByName = async (req, res) => {
  try {
    const { name } = req.query;
    const getData = await model.getByName(name);
    res.send({ data: getData.rows, totalData: getData.rowCount });
  } catch (error) {
    res.status(400).send("Any error");
  }
  //   db.query("SELECT * FROM users WHERE name = $1", [name], (error, result) => {
  //     if (error) {
  //       console.log(error);
  //       res.status(400).send("User not found!!!");
  //     } else if (result.rows == 0) {
  //       db.query("SELECT * FROM users", (error, result) => {
  //         if (error) {
  //           res.status(400).send("Any error");
  //         } else {
  //           res
  //             .status(200)
  //             .send({ data: result.rows, totalData: result.rowCount });
  //         }
  //       });
  //     } else {
  //       res.status(200).send({ data: result.rows, totalData: result.rowCount });
  //     }
  //   });
};

const findByEmail = async (req, res) => {
  try {
    const { email } = req.body;
    const getData = await model.getByEmail(email);
    res.send({ data: getData.rows, totalData: getData.rowCount });
  } catch (error) {
    res.status(400).send("Any error");
  }
};

module.exports = { findAllUser, findById, findByName, findByEmail };
