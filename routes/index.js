//Currently using bodyParser because I learned routing with it,
//Intend to study how it works better so that I can decide if I really need it or not
//Also need to learn how to use routes without it! - N.A. June, 2022.
const bodyParser = require('body-parser')
const { Router } = require('express')
const { SheetsController } = require('../controllers/')

const router = Router()
router
  //A route to access main data from the spreadsheet
  .get('/spreadsheet', SheetsController.readData)
  //A route to access lots of meta data of said spreadsheet 
  .get('/spreadsheet/meta', SheetsController.readMetaData)

const app = app => {
  app.use(
    bodyParser.json(),
    router
  )
}

module.exports = {
  //Export app to use it on the server.
  app,
  //Export controller for tests.
  SheetsController
}