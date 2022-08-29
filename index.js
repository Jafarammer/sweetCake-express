const express = require("express");
const app = express();
const port = 8500;
const bodyParser = require("body-parser");
const helmet = require("helmet");
const userRoutes = require("./routes/users/userRoutes");
const searchUserRoutes = require("./routes/users/searchRoutes");
app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// user routes
app.use("/users", userRoutes);
app.use("/users", searchUserRoutes);

app.listen(port, () => {
  console.log(`Port running on ${port}`);
});
