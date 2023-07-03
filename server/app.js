// importing modules
const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const cors = require('cors')
const app = express()

const { SERVER } = require('./config/constants')

const IP = 'localhost'

mongoose.set('useCreateIndex', true)
mongoose.set('useUnifiedTopology', true)

// Import routes
const userRoute = require('./routes/user.route')

// Connect to mongodb
mongoose.connect(`mongodb+srv://reshmashaik462:mongoAtlas786@cluster-free.4gppmvb.mongodb.net/${SERVER.DATABASE_NAME}`, { useNewUrlParser: true })
// mongoose.connect(`mongodb://${IP}/${SERVER.DATABASE_NAME}`, { useNewUrlParser: true })

// on connection
mongoose.connection.on('connected', (err) => {
    if (err) console.error(`Mongo Connection Failed: \n ${err}`)
    console.log('MongoDB connected successfully.')
})

const port = {
    SSL: SERVER.SSL_PORT,
    NON_SSL: SERVER.NON_SSL_PORT
}

// Adding middleware
app.use(cors())
app.use(bodyparser.json())
app.use('/api/users', userRoute)

// Test API
app.get('/', (req, res) => {
    res.send('Hello Node JS!')
})

// [For http]
// Create a server
app.listen(port.NON_SSL, (err, res) => {
    if (err) console.error(`Failed to start node server: ${err}`)
    console.log(` [HTTP] => Node is running at http://${IP}:${port.NON_SSL}`)
})
