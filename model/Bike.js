const mongoose = require ('mongoose');
const alcoholSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    image: {
        type:String,
        required:false
    },
    food:{
        type: String,
        required:true
    }
},{timestamps:true});

module.exports = mongoose.model('Bike',alcoholSchema);