const model = require("../../models/user/userModel");
const searchModel = require("../../models/user/searchUserModel");

// ADD
const addUser = async (req, res) => {
  try {
    const { name, email, phone_number, password, confirmPassword, photo } =
      req.body;
    if (password != confirmPassword) {
      res.status(404).send("Password not same!!!");
    } else {
      const searchEmail = await searchModel.getByEmail(email);
      const getEmail = searchEmail.rows;
      if (getEmail.length != 0) {
        res.status(400).send("Email already exist!!!");
      } else {
        const getData = await model.addUserModel({
          name,
          email,
          phone_number,
          password,
          photo,
        });
        if (getData) {
          res.status(200).send("Data added successfully");
        } else {
          res.status(400).send("Data failed to add!!!");
        }
      }
    }
  } catch (error) {
    res.status(400).send("Any error");
  }
};
// Edit
const editUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone_number, password, photo } = req.body;
    const searchId = await searchModel.getById(id);
    if (searchId.rowCount > 0) {
      let inputName = name || searchId?.rows[0]?.name;
      let inputEmail = email || searchId?.rows[0]?.email;
      let inputPhoneNumber = phone_number || searchId?.rows[0]?.phone_number;
      let inputPassword = password || searchId?.rows[0]?.password;
      let inputPhoto = photo || searchId?.rows[0]?.photo;
      const editData = await model.editUserModel({
        name: inputName,
        email: inputEmail,
        phone_number: inputPhoneNumber,
        password: inputPassword,
        photo: inputPhoto,
        id,
      });
      if (editData) {
        res.status(200).send("Data changed successfully");
      } else {
        res.status(400).send("Data failed changed!!!");
      }
    } else {
      res.status(400).send("Data not found!!!");
    }
  } catch (error) {
    console.log(`error in here ${error}`);
    res.status(400).send("Any error");
  }
};
// DELETE
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const searchId = await searchModel.getById(id);
    if (searchId.rowCount > 0) {
      const deleteData = await model.deleteUserModel(id);
      if (deleteData) {
        res.status(200).send("Delete data successfully");
      } else {
        res.status(400).sen("Failed to delete!!!");
      }
    } else {
      res.status(400).send("Data not found!!!");
    }
  } catch (error) {
    res.status(400).send("Any error");
  }
};

module.exports = { addUser, editUser, deleteUser };
