var express = require('express')
var app = express()

app.use(express.static(__dirname + '/public'))

app.listen(1400, () => {
  console.log('listening on port 1400')
})
