const { Router } = require('express')
const SheetsController = require('../controllers/SheetsController')

const router = Router()

router
  .get('/sheets', SheetsController.readSheets)
  .get('/cells', SheetsController.readCells)

module.exports = router