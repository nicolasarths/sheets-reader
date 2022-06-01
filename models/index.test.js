const { Sheets, Cells } = require ('../models')
const { spreadsheetId } = require ('../config')
// {}

describe('Connecting to google sheets', () => {
  test('Variable spreadsheet ID succesfully defined', () => {
    expect(typeof(spreadsheetId)).toBe('string')
  })

  test('Succesfully connects to a spreadsheet', async () => {
    const data = await Sheets.data()
    let isConnected = false
    if (data.properties.title) {
      isSpreadsheets = true
    }
    expect(isSpreadsheets).toBeTruthy()
  })
})