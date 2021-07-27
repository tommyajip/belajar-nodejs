// import express router
const router = require('express').Router()


const homeController = require('../controller/homeController')
const homeRouter = require('./homeRouter')
const articleController = require('../controller/articleController')


// router-group
router.use('/', homeRouter)
router.get('/', homeController.index)
router.get('/articles', articleController.index)

module.exports = router;