const mongoose = require('../db/connection')

const StockSchema = new mongoose.Schema({
    name: String,
    symbol: String,
    currentPrice: Number,
    lastPrice: Number
})

const Stock = mongoose.model('Stock', StockSchema)

module.exports = Stock