const express = require('express')
const { dashboard, login } = require('../controllers/main')
const router = express.Router()

router.post('/login', login)
router.get('/dashboard', dashboard)

module.exports = router
