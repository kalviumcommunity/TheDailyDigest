
const express = require('express');
const axios = require('axios');
const xml2js = require('xml2js');
const mongoose = require('mongoose');



const parseString = xml2js.Parser({
  tagNameProcessors: [xml2js.processors.stripPrefix]
}).parseString;


const feedUrl = 'https://www.makeuseof.com/feed/';


const FeedSchema = new mongoose.Schema({
  userId: {
    type: String,
    index:true
},
  title: String,
  link: String,
  pubDate: Date
});


const FeedModel = mongoose.model('muo', FeedSchema);



const app = express();

app.get('/muo', (req, res) => {
  axios.get(feedUrl)
    .then(response => {
      parseString(response.data, (err, result) => {
        if (err) {
          console.error(err);
          return res.status(500).send('Error fetching feed');
        }


        result.rss.channel[0].item.forEach(item => {
          const feed = new FeedModel({
            title: item.title[0],
            link: item.link[0],
            pubDate: new Date(item.pubDate[0])
          });
          feed.save();
        });

        return res.status(200).send(result);
      });
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('Error fetching feed');
    });
});




module.exports = app;
