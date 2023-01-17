var router = require("express").Router();
router.get("/search", function (req, res) {
  res.json({ message: "Vas a buscar un lead" });
});
router.get("/", function (req, res) {
  res.json({ message: "Estás conectado a la API. Recurso: leads" });
});
router.get("/:id", function (req, res) {
  res.json({ message: "Vas a obtener la cerveza con id " + req.params.id });
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
