const mongoose = require('mongoose')
const schema = mongoose.Schema

const signupschema = new schema({
    FullName: { type: String },
    Email: { type: String },
    Username: { type: String },
    password: { type: String },
    bookname: { type: String },
    favorite_genres:{ type: String },
    preferred_language:{ type: String },
    booknumber:{ type: String },

})

const signupModel = mongoose.model('signup_tb',signupschema)
module.exports = signupModel