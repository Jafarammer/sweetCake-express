const Router = require("express").Router();
const controller = require("../../controllers/users/searchUserController");

// Find All
Router.get("/", controller.findAllUser);
// Find By ID
Router.get("/id/:id", controller.findById);
// Find By name
Router.get("/name", controller.findByName);
// Find By email
Router.get("/email", controller.findByEmail);

// Find All with join table recipe
// Router.get("/users/join", (req, res) => {
//   db.query(
//     "SELECT * FROM users INNER JOIN recipe ON users.id = recipe.user_id ORDER BY users.id ASC",
//     (error, result) => {
//       if (error) {
//         console.log(`Error in here ${error}`);
//         res.status(400).send("Any error");
//       } else {
//         res.status(200).send({
//           data: result.rows,
//           totalData: result.rowCount,
//         });
//       }
//     }
//   );
// });

// Find All with join table recipe
// Router.get("/users/join", (req, res) => {
//   db.query(
//     "SELECT * FROM users INNER JOIN recipe ON users.id = recipe.user_id ORDER BY users.id ASC",
//     (error, result) => {
//       if (error) {
//         console.log(`Error in here ${error}`);
//         res.status(400).send("Any error");
//       } else {
//         res.status(200).send({
//           data: result.rows,
//           totalData: result.rowCount,
//         });
//       }
//     }
//   );
// });
module.exports = Router;
