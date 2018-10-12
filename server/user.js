const express = require('express')
const Router = express.Router()
const mongoose = require('mongoose')
const DB_URL = 'mongodb://localhost:27017/user' 
// const User = model.getModel('user')
const User = mongoose.model('user1',new mongoose.Schema({
    'name': {type: String, require: true},
    'type': {type: String, require: true},
    'img': {type: String},
    'password': {type: String, require: true},
    'des': {type: String},
    'job': {type: String},
    'company': {type: String},
    'money': {type: String}
}))
mongoose.connect(DB_URL)
mongoose.connection.on("connected",function(){
    console.log('mongo connect success')
})
Router.get('/register',function(req, res){
    var {name, password, type} = req.query.info
    res.set({
        'Access-Control-Allow-Origin': 'http://localhost:8080'
    })
    User.findOne({name},function(err, doc){
        if(doc){
            return res.json({code: 1, msg: '用户名重复'})
        }else{
            User.create({name,password,type},function(err, doc){
                if(err){
                    console.log(err)
                }else{
                    return res.json({code:0})
                }
            })
        }
    })
})
Router.get('/login', function(req, res){
    var {name, password} = req.query.info
    res.set({
        'Access-Control-Allow-Origin': 'http://localhost:8080'
    })
    User.findOne({name,password},function(err, doc){
        if(doc){
            return res.json({code: 0, msg: '登录成功'})
        }else{
            return res.json({code: 1, msg: '登录有误'})
        }
    })

})
module.exports = Router