const express = require('express')
const app = express()
const stocksController = require('./controllers/stocksController')

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));

app.use('/stocks', stocksController)

app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), () => {
    console.log(`✅ PORT: ${app.get('port')} 🌟`)
})