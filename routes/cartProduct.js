const mongoose= require('mongoose')
const product = require('./product')

const cartProduct=mongoose.Schema({
    product:{
        type:mongoose.Schema.ObjectId,
        ref:'product'
    },
    quantity:{type:Number}
})

module.exports=mongoose.model('cartProduct',cartProductSchema)