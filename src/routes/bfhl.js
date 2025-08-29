const express = require("express");
const router = express.Router();
const controller = require("../controllers/bfhlController");

router.post("/bfhl", controller.handleRequest);

module.exports = router;
