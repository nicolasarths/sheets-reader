const Sheets = require('../models/')

//Define a controller to read the Sheets file;
//Future updates can add all CRUD functions, but right now I don't fully understand the API;
class SheetsController {
    //Read main data from the spreadsheet
    static async readData(req, res){
        try {
            const data = await Sheets.data()
            return res.status(200).json(data)
        } catch (error) {
            return res.status(500).json({messagse: 'failed to get sheet cells.'})
        }
    }
    
    //Read lots of meta data about the spreadsheet 
    static async readMetaData(req, res){
        try {
            const metaData = await Sheets.metaData();
            return res.status(200).json(metaData);
        } catch (error) {
            return res.status(500).json({message: 'failed to connect to google sheets'})
        }
    }
}

module.exports = {
    SheetsController,
    
    //Adding Sheets.data for testing purposes 
    data: Sheets.data()};