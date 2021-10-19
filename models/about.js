const mongoose = require("mongoose");
var Schema = mongoose.Schema

var aboutSchema = new Schema({
    class: {
        type: String,
    },
    title: {
        type: String,
    },
    picture: {
        type: String,
    },

})

module.exports = mongoose.model('About', aboutSchema)