const express = require('express')
const userRouter = require('./user')
const bodyParser = require('body-parser')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
io.on("connection",function(socket){
    socket.on('sendmsg',function(data){
        console.log(data.text)
        io.emit('recvmsg',data)
    })
})
app.use('/user', userRouter)
app.use(bodyParser.json())
server.listen(9093, function(){
    console.log('node start at 9093')
})