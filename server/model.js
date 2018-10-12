//合并在user.js
const mongoose = require('mongoose')
const DB_URL = 'mongodb://localhost:27017/user' 
mongoose.connect(DB_URL)
mongoose.connection.on("connected",function(){
    console.log('mongo connect success')
})
const models = {
    user: {
        'name': {type: String, require: true},
        'type': {type: String, require: true},
        'img': {type: String},
        'password': {type: String, require: true},
        'des': {type: String},
        'job': {type: String},
        'company': {type: String},
        'money': {type: String},
    },
    chat: {
    }
}
for(var m in models){
    console.log(m)
    mongoose.model(m, new mongoose.Schema(models[m]))
}
module.exports = {
    getModel: function(name){
        return mongoose.model[name]
    }
}
   