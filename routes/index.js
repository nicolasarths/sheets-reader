const bodyParser = require('body-parser')
const sheets = require('./sheetRouter')

module.exports = app => {
  app.use(
    bodyParser.json(),
    sheets
  )
}