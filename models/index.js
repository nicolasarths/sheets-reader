const { googleSheetsAPI, auth, spreadsheetId } = require('../config')

//Define class Sheets to gather info from the spreadsheet file
class Sheets {
    //Get main data from the spreadsheet file, using the function that comes after
    static async data () {
        const metaData = await this.metaData()
        return metaData.data;
    }
    //Get the metaData from the file, lots of data
    static async metaData () {
        const api = await googleSheetsAPI();
        const metaData = await api.spreadsheets.get({
            auth,
            spreadsheetId
        })
        return metaData
    }
}

module.exports = Sheets;