const Router = require("express").Router();
const controller = require("../../controllers/users/userController");

// ADD
Router.post("/add", controller.addUser);
// EDIT
Router.patch("/edit/:id", controller.editUser);
// DELETE
Router.delete("/delete/:id", controller.deleteUser);

// ADD Join table
// Router.post("/users/add", (req, res) => {
//   const {
//     name,
//     email,
//     phone_number,
//     password,
//     confirmPassword,
//     photo,
//     title_recipe,
//     ingredients,
//     photo_recipe,
//     user_id,
//   } = req.body;
//   if (password !== confirmPassword) {
//     res.status(401).send("Password not same!!!");
//   } else {
//     db.query(
//       `INSERT INTO users (name, email, phone_number, password, photo) VALUES ($1,$2,$3,$4,$5) RETURNING *`,
//       [name, email, phone_number, password, photo],
//       (error, result) => {
//         if (error) {
//           console.log(`Error in here ${error}`);
//           res.status(400).send("Data failed to add!!!");
//         } else {
//           let userId = result.rows[0]?.id;
//           db.query(
//             "INSERT INTO recipe (title_recipe, ingredients,photo_recipe,user_id) VALUES ($1,$2,$3,$4)",
//             [title_recipe, ingredients, photo_recipe, (userId = user_id)],
//             (error, result) => {
//               if (error) {
//                 console.log(`error in here ${error}`);
//                 res.status(400).send(error);
//               } else {
//                 res.status(200).send("Data added successfully");
//               }
//             }
//           );
//         }
//       }
//     );
//   }
// });

// edit recipe
// Router.patch("/recipe/edit", (req, res) => {
//   const { title_recipe, ingredients, photo_recipe, user_id } = req.body;
//   db.query(
//     "UPDATE recipe SET title_recipe = $1,ingredients = $2, photo_recipe = $3 WHERE user_id = $4",
//     [title_recipe, ingredients, photo_recipe, user_id],
//     (error, result) => {
//       if (error) {
//         res.status(400).send("Any error");
//       } else {
//         res.status(200).send("Data added recipe successfully");
//       }
//     }
//   );
// });

module.exports = Router;
