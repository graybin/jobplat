const express = require('express')
const userRouter = require('./user')
const bodyParser = require('body-parser')
const app = express()
app.use('/user', userRouter)
app.use(bodyParser.json())
app.listen(9093, function(){
    console.log('node start at 9093')
})