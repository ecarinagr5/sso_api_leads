const router = require("express").Router();
const leads = require("./leads");

router.use("/leads", leads);

router.get("/", function (req, res) {
  res.status(200).json({ message: "Estás conectado a nuestra API" });
});

module.exports = router;
