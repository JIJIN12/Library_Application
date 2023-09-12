const express = require('express')
const signinModel = require('../model/signinModel')
const signupModel = require('../model/signupModel')
const signinRouter = express.Router()

signinRouter.post('/',async function(req,res){
    try {
        console.log(req.body.Username);

        const Oldusername = await signupModel.findOne({Username:req.body.Username})
    console.log(Oldusername);

    if(Oldusername){
        return res.status(200).json({ success: true, error:false, details:Oldusername })

    }
    
    if(!Oldusername){
        return res.status(400).json({ success: false, error:true, Message:"username not found" })

    }
    
    
    } catch (error) {
        return res.status(400).json({ success: false, error:true, Message:"Something went wrong" })
        
    }
    
})


module.exports = signinRouter