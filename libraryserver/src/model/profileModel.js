const mongoose = require('mongoose')
const schema = mongoose.Schema

const profileschema = new schema({
    
})
const profilemodel = mongoose.model('profile_tb',profileschema)
module.exports = profilemodel