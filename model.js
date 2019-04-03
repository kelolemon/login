var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/',{useNewUrlParser: true,user:'adminUser',pass:'adminPass',dbName:'test'});

const schema = Schema({
    username: String,
    password: String,
    telephone: String,
    mail: String
});

const UserInfo = mongoose.model('UserInfo', schema);

module.exports = UserInfo;
