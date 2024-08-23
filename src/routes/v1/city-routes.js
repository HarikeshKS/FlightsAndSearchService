const express = require("express");
const CityController = require("../../controllers/city-controller");
const router = express.Router();

router.post("/", CityController.create);
router.delete("/:id", CityController.destroy);
router.patch("/:id", CityController.update);
router.get("/:id", CityController.get);
router.get("/", CityController.getAll)
module.exports = router;