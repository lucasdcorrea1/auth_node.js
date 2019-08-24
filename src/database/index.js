const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://authClient:bootcamp@cluster0-zaa8r.mongodb.net/test?retryWrites=true&w=majority', 
 {useMongoClient: true}
);

mongoose.Promise = global.Promise;

module.exports = mongoose;