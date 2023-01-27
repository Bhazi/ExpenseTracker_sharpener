const express = require("express");
const app = express();

const path = require("path");
const sequelize = require("./util/database");
const bodyParser = require("body-parser");

app.set("views", "views");
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

const expenseMainRoutes = require("./routes/main-page");

app.use(expenseMainRoutes);

sequelize
  .sync()
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
