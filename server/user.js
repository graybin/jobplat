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
const Chat = mongoose.model('chat', new mongoose.Schema({
    'chat_id': {type: String, require: true},
    'from': {type: String, require: true},
    'to': {type: String, require: true},
    'read': {type: Boolean, require: true, default: false},
    'content': {type: String, require: true, default:''},
    'create_time': {type: Number, require: true, default: new Date().getTime()},
}))
const News = mongoose.model('news', new mongoose.Schema({
    'name': {type: String, require: true},
    'with': {type: String, require: true},
    'create_time': {type: Number, require: true, default: new Date().getTime()},
}))
mongoose.connect(DB_URL)
mongoose.connection.on("connected",function(){
    console.log('mongo connect success')
})
Router.get('/register',function(req, res){
    var {name, password, type, img} = JSON.parse(req.query.info)
    console.log(name,password,type)
    res.set({
        'Access-Control-Allow-Origin': 'http://localhost:8080'
    })
    User.find({name},function(err, doc){
        if(doc.length){
            return res.json({code: 1, msg: '用户名重复', doc:doc})
        }else{
            User.create({name,password,type,img},function(err, doc){
                if(err){
                    console.log(err)
                }else{
                    return res.json({code:0, type:type})
                }
            })
        }
    })
})
Router.get('/login', function(req, res){
    var {name, password} = JSON.parse(req.query.info)
    res.set({
        'Access-Control-Allow-Origin': 'http://localhost:8080'
    })
    User.findOne({name,password},function(err, doc){
        if(doc){
            res.cookie('useid',doc._id)
            return res.json({code: 0, msg: '登录成功', doc:doc})
        }else{
            return res.json({code: 1, msg: '登录有误'})
        }
    })

})
Router.get('/eeinfo',function(req,res){
    console.log(req)
    var {name, job,des} = req.query
    res.set({
        'Access-Control-Allow-Origin': 'http://localhost:8080'
    })
    User.update({name},{$set:{job,des}},function(err, doc){
        if(doc){
            return res.json({code: 0, msg: '更新成功', doc:doc})
        }else{
            return res.json({code: 1, msg: '更新有误'})
        }
    })
})
Router.get('/erinfo',function(req,res){
    var {name, job, company, money, des} = req.query
    res.set({
        'Access-Control-Allow-Origin': 'http://localhost:8080'
    })
    User.update({name},{$set:{job,des,company,money}},function(err, doc){
        if(doc){
            return res.json({code: 0, msg: '更新成功', doc:doc})
        }else{
            return res.json({code: 0, msg: '更新有误'})
        }
    })
})
Router.get('/joblist',function(req,res){
    var {name} = req.query
    console.log(name)
    res.set({
        'Access-Control-Allow-Origin': 'http://localhost:8080'
    })
    User.findOne({name},function(err, doc){
        if(doc){
            if(doc.type == '招聘'){
                 User.find({type:'求职'}, function(err, doc){
                    return res.json(doc)
                 })
            }else{
                User.find({type:'招聘'}, function(err, doc){
                    return res.json(doc)
                 })
            }
        }else{
            return res.json({code: 0, msg: '查询', doc:doc})
        }
    })
})
Router.get('/chat', function(req, res){
    var {name,chatwith} = req.query
    var news = []
    res.set({
        'Access-Control-Allow-Origin': 'http://localhost:8080'
    })
    Chat.find({from:name,to:chatwith},function(err, doc){
        if(doc){
            news = doc
        }
    })
    Chat.find({to:name,from:chatwith},function(err, doc){
        if(doc){
            news = news.concat(doc)
            news.sort(function(a,b){
                return a.create_time - b.create_time 
            })
            return res.json(news)
        }
    })
})
Router.get('/send', function(req, res){
    var {from,to,content,create_time} = req.query
    create_time = + create_time
    res.set({
        'Access-Control-Allow-Origin': 'http://localhost:8080'
    })
    News.findOne({name:from,with:to},function(err, doc){
        if(!doc){
            News.create({name:from,with:to,create_time:create_time},function(err,doc){
            })
        }else{
            News.update({name:from,with:to},{$set:{create_time:create_time}},function(){})
        }
    })
    Chat.create({from,to,content,create_time},function(err, doc){
        if(err){
            console.log(err)
        }else{
            return res.json({code:0})
        }
    })
})
Router.get('/news', function(req, res){
    var {name} = req.query
    var news = []
    res.set({
        'Access-Control-Allow-Origin': 'http://localhost:8080'
    })
    News.find({name:name},function(err, doc){
        if(doc){
            news = doc
        }
    })
    News.find({with:name},function(err, doc){
        if(doc){
            doc.forEach(function(item,index){
                news.forEach(function(item1,index1){
                    if(item.name == item1.with){
                        item.create_time>item1.create_time?news.splice(index1,1):doc.splice(index,1)
                    }
                })
            })
            news = news.concat(doc)
            news.sort(function(a,b){
                return a.create_time - b.create_time 
            })
            return res.json(news)
        }
    })
})
module.exports = Router