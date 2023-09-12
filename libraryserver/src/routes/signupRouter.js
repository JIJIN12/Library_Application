const express = require('express')
const signupModel = require('../model/signupModel')
const signupRouter = express.Router()
const bcrypt = require('bcryptjs');

signupRouter.post('/',async function(req,res){
    try {
        console.log(req.body.Email);
        const OldEmail = await signupModel.findOne({Email:req.body.Email})
        
        if(OldEmail){
            return res.status(200).json({ success: true, error:false, Message:"Email already exist" })
        }
        const Oldusername = await signupModel.findOne({Username:req.body.Username})
        if(Oldusername){
            return res.status(200).json({ success: true, error: false, Message:"Username already exist" })
        }
        
        // const haspassword = await bcrypt.hash(req.body.password)//
        const bookdata = {
            Name:req.body.FullName,
            Email:req.body.Email,
            Username:req.body.Username,
            password:req.body.password
        
        }
    

        const savebook = await signupModel(bookdata).save()
        if(savebook){
            return res.status(200).json({ success: true, error: false, details: savebook })
    
        }
        else{
            return res.status(400).json({success:false,error:true,Message:"signup error"})
        }
    } catch (error) {
        return res.status(400).json({ success: false, error: true, message: "Something went wrong" })

    }
    
    
})




module.exports = signupRouter