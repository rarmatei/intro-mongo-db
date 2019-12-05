const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.set("useCreateIndex", true);
const url = "mongodb+srv://<username>:<password>@cluster0-usofd.mongodb.net";
const connect = db =>
  mongoose.connect(`${url}/${db}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });
module.exports = connect;
