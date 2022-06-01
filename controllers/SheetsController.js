const { Sheets } = require('../models/')

class SheetsController {
    static async readSheets(req, res){
        try {
            const spreadsheets = await Sheets.getSheets();
            return res.status(200).send(spreadsheets);
        } catch (error) {
            return res.status(500).send({message: 'failed to connect to google sheets'})
        }
    }
    static async readCells(req, res){
        try {
            const cells = await Sheets.getCells()
        } catch (error) {
            return res.status(500).send({message: 'failed to get sheet cells.'})
        }
    }
}

SheetsController.readSheets();

module.exports = SheetsController;