const express = require("express");
const routes = express.Router();

const Pages = require("../controllers/pages");
const Login = require("../controllers/login");

const isLoging = require("../middlewares/checkUser");

routes.get("/login", Pages.Login);
routes.get("/newUser", Pages.CreateCont);
routes.get("/", Pages.Home);

routes.post("/newUser", Login.createUser);
routes.post("/loginuser", Login.loginUser);

module.exports = routes;
