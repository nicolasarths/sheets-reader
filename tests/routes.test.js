const { app, SheetsController } = require ('../routes')
const { mockRequest, mockResponse } = require('./util/interceptor')

describe('Routing tests', () => {
    test('Routes are receiving something from controller', async () => {
        let req = mockRequest();
        req.params.id = 1;
        const res = mockResponse();

        await SheetsController.readData(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
    })

    test('App is sending something to the server', async () => {
        //This test is empty because I still need to learn how to create it.
    })
})