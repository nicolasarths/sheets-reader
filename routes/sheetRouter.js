const { Router } = require('express')
const { SheetsController } = require('../controllers/')

const router = Router()

router
  .get('/spreadsheet', SheetsController.readData)
  .get('/spreadsheet/meta', SheetsController.readMetaData)

module.exports = router