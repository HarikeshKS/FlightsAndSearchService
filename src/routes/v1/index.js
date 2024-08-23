// Version 1
const express = require("express");
const router = express.Router();

//-> city routes:
const cityApiRoutes = require("./city-routes");
router.use("/city", cityApiRoutes);

//-> airport routes:
const airportApiRoutes = require("./airport-routes");
router.use("/airport", airportApiRoutes);

module.exports = router;
