
const router = require('express').Router();
const book = require('../controller/book.controller');

router.post('/',book.createBook);
router.get('/',book.getAllBook);

module.exports = router