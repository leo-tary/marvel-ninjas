
const marvelPersonae = require('./routes/marvel/persona/facades');
const mongoose = require('./database/ninja-connect');
const {setCustomHeaders} = require('./middleware/customizedheaders');
const port = process.env.PORT || 2805;

const express = require('express');
const app = express();


app.use(setCustomHeaders);
app.use('/marvel-ninjas/api/personas' , marvelPersonae);


app.listen(port , () => {
    console.log(`Marvel world ignited @${port}...`);
})