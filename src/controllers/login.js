const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

const saltRounds = 10;

module.exports = {
  async createUser(req, res) {
    try {
      const { name, email, cpf, celular } = req.body;
      const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
      /* const user = {email: req.body.email, password: hashedPassword} */
      const user = await prisma.user.create({
        data: {
          name,
          cpf,
          celular,
          email,
          password: hashedPassword,
        },
      });
      return res.send(user);
    } catch (error) {
      return res.json(error);
    }
  },

  async loginUser(req, res) {
    try {
      const { email, password } = req.body;
      const user = await prisma.user.findFirst({
        where: {
          email,
        },
      });

      const passwordIsValid = await bcrypt.compare(password, user.password);
      if (!passwordIsValid) {
        return res.send("Senha invalida");
      }
      req.session.user = user.name;
      res.redirect("/");
    } catch (error) {
      return res.json({ error: "error" });
    }
  },
};
