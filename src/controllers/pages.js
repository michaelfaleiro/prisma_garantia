module.exports = {
  async Login(req, res) {
    try {
      return res.render("pages/home/login.ejs");
    } catch (error) {
      return res.send(error);
    }
  },

  async CreateCont(req, res) {
    try {
      return res.render("pages/home/criarConta.ejs");
    } catch (error) {
      return res.send("aqui");
    }
  },

  async Home(req, res) {
    try {
      return await res.render("pages/home/home", {});
    } catch (error) {
      return res.send(error);
    }
  },
};
