const { Router } = require('express')
const SheetsController = require('../controllers/SheetsController')

const router = Router()

router
  .get('/sheets', SheetsController.read)

module.exports = router;