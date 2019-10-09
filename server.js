var express = require('express');
var app = express();
var path = require('path');
var open = require('open');

const port = 8000;

// __dirname will use the current path from where you run this file 
function allowCrossDomain (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
}

app.use(allowCrossDomain)

app.use('/', express.static(`${__dirname}`))
app.use(express.static(path.join(__dirname, 'html')));
app.use(express.static(path.join(__dirname, 'css')));
app.use(express.static(path.join(__dirname, 'lib')));

app.listen(port, async (err) => {
  if (err) { console.error('Something bad happend', err) }

  console.log(`App running at: http://localhost:${port}`)
  await open(`http://localhost:${port}`)
})