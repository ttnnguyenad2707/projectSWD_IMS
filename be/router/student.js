const router = require('express').Router();
const student = require('../controller/student')

router.post('/',student.createStudent);
router.get('/',student.getStudent);

module.exports = router