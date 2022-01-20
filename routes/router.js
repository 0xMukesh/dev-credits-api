const getCredits = require('../controllers/getCredits')
const getTopCredits = require('../controllers/getTopCredits')
const postCredits = require('../controllers/postCredits')

const router = require('express').Router()

router.get('/get/:id', getCredits)
router.post('/post', postCredits)
router.get('/top', getTopCredits)

module.exports = router