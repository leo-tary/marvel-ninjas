const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/marvel-ninja',{ useNewUrlParser: true })
        .then((connect) => console.log(`Connected to marvel universe...`))
        .catch((err) => console.log(`Marvel universe defeated...`));


module.exports = mongoose;