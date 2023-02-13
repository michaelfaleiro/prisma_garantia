require("dotenv").config();
const express = require("express");
const routes = require("./routes/routes");
const path = require("path");
const session = require("express-session");
const bcrypt = require("bcrypt");

const port = process.env.PORT || 3333;

const app = express();

app.use(session({ secret: "michael" }));
app.use(express.json());
app.use(express.urlencoded());
app.use((req, res, next) => {
  if ("user" in req.session) {
    res.locals.user = req.session.user;
  }
  next();
});
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);
app.listen(port);

console.log(`Rodando na Porta ${port}`);
