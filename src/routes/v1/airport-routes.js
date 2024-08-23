const express = require("express");
const AirportController = require("../../controllers/airport-controller");
const router = express.Router();

router.post("/", AirportController.create);
router.delete("/:id", AirportController.destroy);
router.patch("/:id", AirportController.update);
router.get("/:id", AirportController.get);
router.get("/", AirportController.getAll)
module.exports = router;