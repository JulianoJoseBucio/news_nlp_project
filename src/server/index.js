var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var aylien = require("aylien_textapi");
const dotenv = require('dotenv');
dotenv.config();

// set aylien API credentials
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
  });

const app = express()


app.use(cors())
app.use(express.static('dist'))

console.log(__dirname)

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', function (req, res) {
     res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})


app.post('/sentiment-analysis', (req, res) => {
    textapi.sentiment({ url: req.body.url }, (error, result) => {
          if(error) {
            console.log('Error during Aylien request')
            res.send();
            return;
          }

          console.log('Got Aylien result')
          
          res.send(result);
        })
})


module.exports = app;