const mongoose =require('mongoose')
const product = require('./product')

const cartSchema=mongoose.Schema({
    user:{
        type:mongoose.Types.ObjectId,
        ref:'user'
    },
    product:[{
        type:mongoose.Types.ObjectId,
        ref:"cartProduct"
    }],
    price:{
        type:Number,
        default:0
    }
})

module.exports-mongoose.model('cart',cartSchema);