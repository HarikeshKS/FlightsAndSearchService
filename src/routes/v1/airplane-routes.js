const express = require("express");
const AirplaneController = require("../../controllers/airplane-controller");
const router = express.Router();

router.post("/", AirplaneController.create);
router.delete("/:id", AirplaneController.destroy);
router.patch("/:id", AirplaneController.update);
router.get("/:id", AirplaneController.get);
router.get("/", AirplaneController.getAll)
module.exports = router;