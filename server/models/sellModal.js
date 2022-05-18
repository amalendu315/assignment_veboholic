const mongoose = require("mongoose");

const sellSchema = new mongoose.Schema({
    sellRate:{
        type:Number,
        default: Math.floor(Math.random()*10)
    },
    sellQuantity:{
        type:Number,
        default: (Math.floor(Math.random()*1000) + 35000)
    }
})

module.exports = mongoose.model("Sell",sellSchema);