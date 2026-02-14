const express = require("express");
const router = express.Router();

const AuthController = require("../controllers/AuthController");
const AuthMiddleware = require("../middleware/AuthMiddleware");

router.post("/login", AuthController.login);

router.get("/profile", AuthMiddleware.verifyToken, (req, res) => {
  res.json({
    message: "Rota protegida funcionando 🔒",
    user: req.user,
  });
});

module.exports = router;
