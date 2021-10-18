const mongoose = require("mongoose");
var Schema = mongoose.Schema

var serveSchema = new Schema({
    name: {
        type: String,
    },
    about: {
        type: String,
    },
    picture: {
        type: String,
    },
    page:{
        type: String,
    },
})

module.exports = mongoose.model('Serve', serveSchema)