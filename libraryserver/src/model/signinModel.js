const mongoose = require('mongoose')
const schema = mongoose.Schema

const signinschema = new schema({
    
    Username:{type:String},
    password:{type:String}
})

const signinModel = mongoose.model('signin_tb',signinschema)
module.exports = signinModel