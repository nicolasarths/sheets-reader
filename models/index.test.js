const { Sheets, Cells } = require ('../models')
const { spreadsheetId } = require ('../config')

describe('Connecting to google sheets', () => {
  test('Variable spreadsheetId succesfully defined at config/connection.js', () => {
    expect(typeof(spreadsheetId)).toBe('string')
  })

  test('Succesfully connects to a spreadsheet / and this spreadsheet\'s title is accessible', async () => {
    const data = await Sheets.data()
    let isConnected = false
    if (data.properties.title) {
      isSpreadsheets = true
    }
    expect(isSpreadsheets).toBeTruthy()
  })
})