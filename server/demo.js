const express = require('express')
const app = express()
const mongoose = require('mongoose')
const DB_URL = 'mongodb://localhost:27017/jobplat' 
mongoose.connect(DB_URL)
mongoose.connection.on("connected",function(){
    console.log('mongo connect success')
})
const User = mongoose.model('user',new mongoose.Schema({
    name:{type:String, required:true},
    age:{type:Number, required:true}
}))
User.create({
    name: 'graybin',
    age: 18
},function(err, doc){
    if(!err){
        console.log(doc)
    }else{
        console.log(err)
    }
})
app.get('/',function(req,res){
    res.set({
        'Access-Control-Allow-Origin': 'http://localhost:8080'
    })
    res.send('<h1>hello world!</h1>')
})
app.get('/data', function(req,res){
    User.find({},function(err, doc){
        res.json(doc)
    })
})
app.listen(9093, function(){
    console.log('node start at 9093')
})