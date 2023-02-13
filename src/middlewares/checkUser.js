const isLoging = function (req, res, next) {
  if ("user" in req.session) {
    return next();
  } else {
    res.redirect("/login");
  }
};

module.exports = isLoging;
