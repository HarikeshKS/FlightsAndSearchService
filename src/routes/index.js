const express = require("express");

const router = express.Router();

//for version - 1
const v1ApiRoutes = require("./v1/index");
router.use("/v1", v1ApiRoutes);

module.exports = router;
