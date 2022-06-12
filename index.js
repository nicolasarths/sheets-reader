const express = require("express");
const app = express();
const { app: router } = require('./api/routes');
const port = 3000;

router(app);

app.listen(port, (req,res) => console.log(`Up in ${port}.`));