const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json())
app.use(cors())

app.use(require("./ArsTechnicaFeed.js"))
app.use(require("./TnwFeed.js"))
app.use(require("./EngadgetFeed.js"))
app.use(require("./AndroidPoliceFeed.js"))
app.use(require("./VentureBeatFeed.js"))
app.use(require("./GizmodoFeed.js"))
app.use(require("./DigitalTrendsFeed.js"))
app.use(require("./AndroidAuthorityFeed"))
app.use(require("./TheVergeFeed"))
app.use(require("./MuoFeed"))


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(4000, () => {
      console.log('Server listening on port 4000');
    });
  })
  .catch(error => {
    console.error(error);
  });


  