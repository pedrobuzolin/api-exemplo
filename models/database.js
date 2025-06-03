const mongoose = require("mongoose")

require("dotenv/config")

try
{
    const uri = "link_mongodb"
    mongoose.connect(uri)
}
catch (err)
{
    console.log(err)
}

mongoose.Promise = global.Promise
module.exports = mongoose