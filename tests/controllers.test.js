const { mockRequest, mockResponse } = require('./util/interceptor')
const { SheetsController, data } = require('../controllers')

describe("Check method \'readData\' ", () => {
    test('data is being retreived from models', async () => {
        const retreivedData = await data;
        const dataProof = retreivedData.properties.title
        expect(typeof(dataProof)).toBe('string')
    })
    
    test('should 200 and return correct value', async () => {
        let req = mockRequest();
        req.params.id = 1;
        const res = mockResponse();

        await SheetsController.readData(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
    });
});