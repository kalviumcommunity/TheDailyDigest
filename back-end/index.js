const express = require('express');
const cors = require('cors')

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


app.listen(3001, () => {
    console.log('Server is Up.')
})