const express = require('express')
const signupModel = require('../model/signupModel')
const bookmodel = require('../model/bookModel')
const profileRouter = express.Router()

profileRouter.get('/:id',async function (req,res){
    try {
        const profileid = req.params.id
        const profile = await signupModel.findOne({_id:profileid})
        if(profile){
            return res.status(200).json({success:true,error:false,details:profile})
        }
    } catch (error) {
        return res.status(400).json({success:false,error:true,message:"Something went wrong"})
        
    }
})

profileRouter.get('/work/:username',async function(req,res){
    try {
        const profileusername = req.params.username
        console.log(profileusername);
        const work = await  bookmodel.find({username:profileusername})
        if(work){
            return res.status(200).json({success:true,error:false,details:work})
        }
    } catch (error) {
        return res.status(400).json({success:false,error:true,message:"Something went wrong"})

        
    }
})

profileRouter.get('/deleteprofile/:id',async function (req,res){
    try {
        const id = req.params.id
        const deleteprofile = await signupModel.deleteOne({_id:id})
        if(deleteprofile){
            return res.status(200).json({success:true,error:false,message:"Deleteprofile Successful"})

        }
    } catch (error) {
        return res.status(400).json({success:false,error:true,message:"Something went wrong"})
    }
})
module.exports = profileRouter