const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config();
const router = require('./routes/auth')
const routerUser = require('./routes/users')
const connectDB = require('./config/db')
const app = express()
app.use(express.urlencoded({ extended: false }));
app.use(express.json({limit:'20mb'}));
app.use(cors())
app.use(morgan('dev'))

connectDB()
const port = process.env.PORT
app.use('/api',router)
app.use('/api',routerUser)

app.listen(port,()=>{
    console.log('server is running on port ',port)
})
