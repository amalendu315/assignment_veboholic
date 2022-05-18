const buySchema = require("../models/buyModal");

exports.storeBuy = async (req,res) => {
    try {
        const buy = await buySchema.create({
            buyRate: Math.floor(Math.random()*10),
            buyQuantity: Math.floor(Math.random()*1000) + 35000,
        });
        if(!buy) return res.status(400).json({success:false,message:"No Data Found"});
        res.status(201).json({
            success:true,
            buy,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

exports.getAllBuyList = async (req, res) => {
    try {
        const buys = await buySchema.find({});
        if(!buys) return res.status(400).json({success:false,message:'No Data Found'})
        res.status(201).json({
            success:true,
            buys,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error,
        })
    }
}