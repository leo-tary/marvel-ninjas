
const marvel = require('./routes/marvel');
const mongoose = require('./database/ninja-connect');
const port = process.env.PORT || 2805;

const express = require('express');
const app = express();


app.use('/marvel-ninjas/api' , marvel);

app.listen(port , () => {
    console.log(`Marvel world ignited @${port}...`);
})