const mongoose = require("mongoose");

const buySchema = new mongoose.Schema({
    buyRate:{
        type:Number,
        default: Math.floor(Math.random()*10)
    },
    buyQuantity:{
        type:Number,
        default: (Math.floor(Math.random()*1000) + 35000)
    }
})

module.exports = mongoose.model("Buy",buySchema);