const { login, register } = require("../controller/main.controller");
const router = require("express").Router();
router.get("/*", (req, res) =>
  res.sendFile("index.html", { root: "./dist/portfolio" })
);
router.post("/moviedb/login", login);
router.post("/moviedb/register", register);
module.exports = router;
