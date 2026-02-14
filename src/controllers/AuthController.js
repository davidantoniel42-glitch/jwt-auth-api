const jwt = require("jsonwebtoken");

exports.login = (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ message: "Username é obrigatório" });
  }

  const token = jwt.sign({ username }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  res.json({ token });
};
