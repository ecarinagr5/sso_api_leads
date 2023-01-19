const router = require("express").Router();
const {
  leadsGet,
  leadsSearch,
  leadsById,
  leadsPost,
} = require("../controller/leads");

router.get("/search", leadsSearch);

router.get("/", leadsGet);

router.get("/:id", leadsById);

router.post("/", leadsPost);

router.put("/:id", function (req, res) {
  res.json({
    message: "You are going to update a lead by id " + req.params.id,
  });
});
router.delete("/:id", function (req, res) {
  res.json({ message: "You are going to delete a lead" + req.params.id });
});
module.exports = router;
