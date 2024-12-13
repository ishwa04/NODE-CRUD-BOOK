const mongoose = require("mongoose")

const schema = mongoose.Schema({
    book:{
        type:String,
        required:true
    },
    auther:{
        type:String,
        required:true 
    },
    price:{
        type:String,
        required:true 
    },
    ryear:{
        type:String,
        required:true
    }
});

const admin = mongoose.model("book",schema);
module.exports = admin