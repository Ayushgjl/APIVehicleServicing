const mongoose = require('mongoose');

const CarBookingSchema = new mongoose.Schema({
name:{
    type:String,
    required:true
},
contact:{
    type:String,
    required:true
},
location:{
    type:String,
    required:true
},
carnumber:{
    type:String,
    required:true
},
problem:{
    type:String,
    required:true
},
model:{
    type:String,
    required:true
},
type:{
    type:String,
    required:true
},
servicing:{
    type:String,
    required:true
},
date:{
    type:String,
    required:true
},
time:{
    type:String,
    required:true
}
},{timestamps:true})
module.exports = mongoose.model('carBooking',CarBookingSchema); 