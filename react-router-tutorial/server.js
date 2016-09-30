var express = require('express')
var path = require('path')

var app = express()

app.use(express.static(__dirname))

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'))
})

var PORT = process.env.PORT || 8080
/* Should be able to es6 this but idunno... */
app.listen((PORT) => {console.log('Production Express server running at localhost:' + PORT)})
