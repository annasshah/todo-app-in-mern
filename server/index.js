// basic requires 
require("dotenv").config()
const http = require('http')
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const connectToMongo = require("./config/database")
const initial_route = require("./routes/initial_route")
const all_routes = require('./routes/index')


connectToMongo()

const app = express()
const port = process.env.PORT || 6000

app.use(express.json())
app.use(cookieParser())


// app.use(cookieParser(config.cookieSecret));
// app.use(express.static(path.resolve(__basedir, 'static')));
app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true
}))


// app.get('/check', async(req, res)=> {
//     // console.log('Cookies: ', req.cookies)

//     res.json({data:req.cookies})
// })
app.use(all_routes)
app.get('*', initial_route)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})