const mongoose = require('mongoose')

const urlSchena = new mongoose.Schema({
    shortId : {
        type : String,
        required : true,
        unique : true
    },
    longId : {
        type : String,
        required : true
    },
    totatClicks:{
        type : Number,
        default: 0
    }
});

const URL = mongoose.model("url", urlSchena);


module.exports = URL;
