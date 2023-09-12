const express = require('express')
const authorModel = require('../model/authorModel')
const multer = require('multer')
const authorRouter = express.Router()
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../client/public/image/uploads/')
    },
    filename: function (req, file, cb) {
        //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, req.body.name)
    }
})
const upload = multer({ storage: storage })



authorRouter.get('/', async function (req, res) {
    try {
        const viewauthor = await authorModel.find()
        console.log(viewauthor);
        if (viewauthor[0]) {
            return res.status(200).json({ success: true, error: false, details: viewauthor })
        }
        else {
            return res.status(400).json({ success: false, error: true, message: "data not found" })

        }
    } catch (error) {
        return res.status(400).json({ success: false, error: true, message: "Something went wrong" })


    }

})

authorRouter.post('/addauthor', async function (req, res) {
    try {
        console.log(req.body.authorname);
        const authordata1 = {
            authorname: req.body.authorname,
            authorbook: req.body.authorbook,
            authorimage: req.body.authorimage,
            authorgenre:req.body.authorgenre,
            authordescription: req.body.authordescription
        }
        console.log(authordata1);
        const addauthor = await authorModel(authordata1).save()
        if (addauthor) {
            return res.status(200).json({ success: true, error: false, Message: "Author added" })

        }

    } catch (error) {
        return res.status(400).json({ success: false, error: true, message: "Something went wrong" })

    }
})

authorRouter.post('/uploads', upload.single('file'), async function (req, res) {
    res.status(200).json({ success: true, error: false, message: "file added" })
})


authorRouter.get('/editauthor/:id', async function (req, res) {
    try {
        const authorid = req.params.id
        console.log(authorid);
        const editauthor = await authorModel.findOne({ _id: authorid })
        if (editauthor) {
            return res.status(200).json({ success: true, error: false, details: editauthor })

        }


    } catch (error) {
        return res.status(400).json({ success: false, error: true, message: "Something went wrong" })


    }
})


authorRouter.post('/updateauthor', async function (req, res) {
    try {
        const authorid1 = req.body._id
        const authordata = {
            authorname: req.body.authorname,
            authorbook: req.body.authorbook,
            authorimage: req.body.authorimage,
            authorgenre:req.body.authorgenre,
            authordescription: req.body.authordescription
        }
        console.log(authordata);
        const authorupdate = await authorModel.updateOne({ _id: authorid1 }, { $set: authordata })
        if (authorupdate) {
            return res.status(200).json({ success: true, error: false, Message: "Author updated" })

        }
        else {
            return res.status(400).json({ success: "false", error: "true", message: "updateauthor error" })

        }
    } catch (error) {
        return res.status(400).json({ success: false, error: true, message: "Something went wrong" })

    }
})

authorRouter.get('/deleteauthor/:id', async function (req, res) {
    try {
        const deleteauthorid = req.params.id
        console.log(deleteauthorid);
        const deleteauthor = await authorModel.deleteOne({ _id: deleteauthorid })
        console.log(deleteauthor);
        if (deleteauthor) {
            return res.status(200).json({ success: true, error: false, Message: "Author deleted" })

        }
        else {
            return res.status(400).json({ success: "false", error: "true", message: "Deleteauthor error" })

        }
    } catch (error) {
        return res.status(400).json({ success: false, error: true, message: "Something went wrong" })

    }
})

module.exports = authorRouter