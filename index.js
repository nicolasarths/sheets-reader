const express = require("express");
const app = express();
const router = require('./routes');
const port = 3000;

router(app);

app.listen(port, (req,res) => console.log(`Up in ${port}.`));