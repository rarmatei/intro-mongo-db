const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const url = "mongodb+srv://<username>:<password>@cluster0-usofd.mongodb.net";
const connect = db => mongoose.connect(`${url}/${db}`);
module.exports = connect;
