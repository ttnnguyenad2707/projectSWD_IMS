const router = require("express").Router();
const MyClass = require("../controller/classController");

router.post("/", MyClass.createClass);
router.get("/", MyClass.getAllClass);

module.exports = router;
