const router = require("express").Router();
const { leadsGET, leadsSearch } = require("../controller/leads");

router.get("/search", leadsSearch);

router.get("/", leadsGET);

router.get("/:id", function (req, res) {
  res.json({ message: "Vas a obtener un lead con id " + req.params.id });
});
router.post("/", function (req, res) {
  res.json({ message: "Vas a añadir una cerveza" });
});
router.put("/:id", function (req, res) {
  res.json({ message: "Vas a actualizar la cerveza con id " + req.params.id });
});
router.delete("/:id", function (req, res) {
  res.json({ message: "Vas a borrar la cerveza con id " + req.params.id });
});
module.exports = router;
