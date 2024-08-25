const express = require("express");
const router = express.Router();

const { FlightController } = require("../../controllers/index");
const { FlightMiddleware } = require("../../middlewares/index");
router.post("/", FlightMiddleware.validateCreateFlight, FlightController.create);
router.delete("/:id", FlightController.destroy);
router.patch("/:id", FlightController.update);
router.get("/:id", FlightController.get);
router.get("/", FlightController.getAll);

module.exports = router;
