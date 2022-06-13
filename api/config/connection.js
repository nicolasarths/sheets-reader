const { google } = require('googleapis')

//A spreadsheet ID is required to access said spreadsheet. I hid mine just because. 
const spreadsheetId = require('../spreadsheetId')

//Reach the credentials file and create an authorization
const auth = new google.auth.GoogleAuth({
    keyFile:"api/credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets"
});

//We then return the access to the API so that it can be used in other files.
const googleSheetsAPI = async () => {
    //Creating client instance for authorization
    const client = await auth.getClient;
    //Instance of Google Sheets API
    return google.sheets({version: "v4", auth: client });
}

module.exports = { googleSheetsAPI, auth, spreadsheetId };