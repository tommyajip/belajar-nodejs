// import express router
const router = require('express').Router();

// import homeController, fungsinya untuk mengakses controller dari router
const homeController = require('../controller/homeController');

router.get('/', homeController.index);

module.exports = router;