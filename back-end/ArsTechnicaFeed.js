const app = require('express').Router()
const axios = require('axios');
const xml2js = require('xml2js')
const parseString = xml2js.Parser({
  tagNameProcessors: [xml2js.processors.stripPrefix]
}).parseString;

const feedUrl = 'https://feeds.arstechnica.com/arstechnica/technology-lab';

app.get('/arstechnica', (req, res) => {
  axios.get(feedUrl)
    .then(response => {
      parseString(response.data, (err, result) => {
        
        if (err) {
          console.error(err);
          return res.status(500).send('Error fetching feed');
        }
        return res.status(200).send(result)
      });
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('Error fetching feed');
    });
});


module.exports = app