const router = require('express').Router()
const articleController = require('../controller/articleController')

router.get('/', articleController.index)
router.get('/:id', articleController.show)

router.post('/create', articleController.create)

module.exports = router