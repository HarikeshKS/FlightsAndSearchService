// Version 1
const express = require("express");
const router = express.Router();

//-> city routes:
const cityApiRoutes = require("./city-routes");
router.use("/city", cityApiRoutes);

//-> airport routes:
const airportApiRoutes = require("./airport-routes");
router.use("/airport", airportApiRoutes);

//-> flight routes:
const flightApiRoutes = require("./flight-routes");
router.use("/flight", flightApiRoutes);

//-> airplane routes:
const airplaneApiRoutes = require("./airplane-routes");
router.use("/airplane", airplaneApiRoutes);

module.exports = router;
