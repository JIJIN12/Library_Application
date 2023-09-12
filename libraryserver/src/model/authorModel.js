const mongoose = require('mongoose')
const schema = mongoose.Schema

const authorschema = new schema({
    authorname:{type:String},
    authorbook:{type:String},
    authorimage:{type:String},
    authorgenre:{type:String},
    authordescription:{type:String}
})

const authorModel = mongoose.model('author_tb',authorschema)
module.exports = authorModel

