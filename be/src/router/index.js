const express = require("express");
const router = express.Router();

router.use("/book", require("./book"));
router.use("/class", require("./class"));

module.exports = router;
