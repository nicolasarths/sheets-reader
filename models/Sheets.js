const { googleSheetsAPI, auth, spreadsheetId } = require('../config')

class Sheets {
    static async metaData () {
        const api = await googleSheetsAPI();
        const metaData = await api.spreadsheets.get({
            auth,
            spreadsheetId
        })
        return metaData
    }
    static async data () {
        const metaData = await this.metaData()
        return metaData.data;
    }
}

Sheets.data().then(a => console.log(a.properties.title))