const models = require('../models')
// {}

describe('Connecting to google sheets', () => {
    test('Succesfully connects a spreadsheet', async () => {
      const googleSheets = await models()
      let isConnected = false
      if (googleSheets.spreadsheets) {
        isSpreadsheets = true
      }
      expect(isSpreadsheets).toEqual(true)
    })
  })