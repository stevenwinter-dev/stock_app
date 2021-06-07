const express = require('express')
const router = express.Router()

const Stock = require('../models/stock')

router.get('/', (req, res, next) => {
    Stock.find({})
    .then(stocks => res.render('index', {stocks}))
    .catch(next)
})

module.exports = router