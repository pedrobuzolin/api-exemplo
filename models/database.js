const mongoose = require("mongoose")

require("dotenv/config")

try
{
    const uri = "mongodb+srv://usuario:senha@aulaescobar.i6snz.mongodb.net/API"
    mongoose.connect(uri)
}
catch (err)
{
    console.log(err)
}

mongoose.Promise = global.Promise
module.exports = mongoose