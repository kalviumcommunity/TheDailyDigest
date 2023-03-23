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


<<<<<<< HEAD
app.listen(3001, () => {
=======
app.listen(3002, () => {
>>>>>>> 8b033441aab83fc22bc0345696c95e46fa0f863d
    console.log('Server is Online.')
})