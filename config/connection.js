const { google } = require('googleapis')

//You need the spreadsheet ID to access it. I hid mine just because. 
const spreadsheetId = require('../secret/spreadsheetId')

//Reaching the credentials file and creating an authorization
const auth = new google.auth.GoogleAuth({
    keyFile:"credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets"
});

const googleSheetsAPI = async () => {
    //Creating client instance for authorization
    const client = await auth.getClient;
    //Instance of Google Sheets API
    return google.sheets({version: "v4", auth: client });
}

module.exports = { googleSheetsAPI, auth, spreadsheetId };