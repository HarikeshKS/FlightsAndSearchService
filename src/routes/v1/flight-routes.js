const express = require("express");
const FlightController = require("../../controllers/flight-controller");
const router = express.Router();

router.post("/", FlightController.create);
// router.delete("/:id", FlightController.destroy);
// router.patch("/:id", FlightController.update);
// router.get("/:id", FlightController.get);
// router.get("/", FlightController.getAll)

module.exports = router;