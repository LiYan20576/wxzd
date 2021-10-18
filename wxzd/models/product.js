const mongoose = require("mongoose");
var Schema = mongoose.Schema

var proSchema = new Schema({
    name: {
        type: String,
    },
    about: {
        type: String,
    },
    picture: {
        type: String,
    },
    characteristic: {
        type: String,
    },
    class:{
        type: String,
    },
})

module.exports = mongoose.model('Pro', proSchema)