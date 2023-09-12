const express = require('express');
const bookmodel = require('../model/bookModel');
const multer = require('multer');
const bookRouter = express.Router()
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

bookRouter.get('/', async function (req, res) {
    try {
        const bookvalue = await bookmodel.find()
        // console.log(bookvalue);
        if (bookvalue[0]) {
            return res.status(200).json({ success: true, error: false, details: bookvalue })

        }
        else {
            return res.status(400).json({ success: False, error: true, message: "data not found" })

        }
    } catch (error) {
        return res.status(400).json({ success: false, error: true, message: "Something went wrong" })


    }

})


bookRouter.post('/addbook', async function (req, res) {
    try {
        const data = {
            username:req.body.username,
            bookname: req.body.bookname,
            bookdescription: req.body.bookdescription,
            author: req.body.author,
            bookgenre: req.body.bookgenre,
            image: req.body.image
        }
        console.log(data);

        
        const savebook = await bookmodel(data).save()
        console.log(savebook);

        

        if (savebook) {
            return res.status(200).json({ success: "true", error: "false", Message: "Book added", details: savebook })

        }

    } catch (error) {
        console.log(error);
    }

})

bookRouter.post('/uploads', upload.single('file'), async function (req, res) {
    res.status(200).json({ success: true, error: false, message: "file added" })
})

bookRouter.get('/editbook/:id', async function (req, res) {
    try {
        const bookid = req.params.id
        const editbook = await bookmodel.findOne({ _id: bookid })

        if (editbook) {
            return res.status(200).json({ success: "true", error: "false", details: editbook })

        }
        else {
            return res.status(400).json({ success: "false", error: "true", message: "editbook error" })


        }
    } catch (error) {
        return res.status(400).json({ success: "false", error: "true", message: "Something went wrong" })

    }

})


bookRouter.post('/updatebook', async function (req, res) {
    try {
        const bookid1 = req.body._id
        const databook = {
            username:req.body.usename,
            bookname: req.body.bookname,
            bookdescription: req.body.bookdescription,
            author: req.body.author,
            bookgenre: req.body.bookgenre,
            image: req.body.image
        }
        const updatebook = await bookmodel.updateOne({ _id: bookid1 }, { $set: databook })

        if (updatebook) {
            return res.status(200).json({ success: true, error: false, message: "updation complete" })
        }
        else {
            return res.status(400).json({ success: "false", error: "true", message: "updatebook error" })

        }
    } catch (error) {
        return res.status(400).json({ success: "false", error: "true", message: "Something went wrong" })

    }
})

bookRouter.get('/deletebook/:id', async function (req, res) {
    try {
        const deletebook_id = req.params.id
        const deletebook = await bookmodel.deleteOne({ _id: deletebook_id })
        if (deletebook) {
            return res.status(200).json({ success: true, error: false, message: "deletebook complete" })

        }
        else {
            return res.status(400).json({ success: "false", error: "true", message: "deletebook error" })

        }
    } catch (error) {
        return res.status(400).json({ success: "false", error: "true", message: "Something went wrong" })

    }
})
bookRouter.post('/check', async function (req, res) {
    try {
        const selectedGenres = Object.keys(req.body);
        let filteredBooks = [];

        if (selectedGenres.length === 0) {
            // No genres selected, return all books
            filteredBooks = await bookmodel.find();
        } else {
            // At least one genre selected, filter books accordingly
            for (const genre of selectedGenres) {
                if (genre === 'action') {
                    const actionBooks = await bookmodel.find({ bookgenre: 'action' });
                    filteredBooks = filteredBooks.concat(actionBooks);
                } else if (genre === 'fantasy') {
                    const fantasyBooks = await bookmodel.find({ bookgenre: 'fantasy' });
                    filteredBooks = filteredBooks.concat(fantasyBooks);
                }
                else if (genre === 'romance') {
                    const romanceBooks = await bookmodel.find({ bookgenre: 'romance' });
                    filteredBooks = filteredBooks.concat(romanceBooks);
                }
                else if (genre === 'fiction') {
                    const fictionBooks = await bookmodel.find({ bookgenre: 'fiction' });
                    filteredBooks = filteredBooks.concat(fictionBooks);
                }
                else if (genre === 'mystery') {
                    const mysteryBooks = await bookmodel.find({ bookgenre: 'mystery' });
                    filteredBooks = filteredBooks.concat(mysteryBooks);
                }
                else if (genre === 'scifi') {
                    const scifiBooks = await bookmodel.find({ bookgenre: 'scifi' });
                    filteredBooks = filteredBooks.concat(scifiBooks);
                }
            }
            // Add more conditions for other genres
        }



        if (filteredBooks.length > 0) {
            return res.status(200).json({ success: true, error: false, details: filteredBooks });
        } else {
            return res.status(200).json({ success: true, error: false, details: [] });
        }
    } catch (error) {
        return res.status(400).json({ success: false, error: true, message: "Something went wrong" });
    }
});


// bookRouter.post('/check', async function (req, res) {

//     // for(let i=0;i<check.length;i++){

//     // }
//     // bookgenre = bookgenre.split(",")
//     try {
//         const bookgenre1 = req.body
//         console.log(bookgenre1);

//         const check1 = await bookmodel.find({ bookgenre: bookgenre1.action })
//         console.log(check1);
//         const checkfantasy = await bookmodel.find({bookgenre:bookgenre1.fantasy})
//         console.log(checkfantasy);
//         const checkromance = await bookmodel.find({bookgenre:bookgenre1.romance})
//         console.log(checkromance);
//         const checkfiction = await bookmodel.find({bookgenre:bookgenre1.fiction})
//         console.log(checkfiction);
//         const checkscifi = await bookmodel.find({bookgenre:bookgenre1.scifi})
//         console.log(checkscifi);
//         const checkmystery = await bookmodel.find({bookgenre:bookgenre1.mystery})
//         console.log(checkmystery);

//         if (check1[0]) {
//             return res.status(200).json({ success: true, error: false, details: check1 })
//         }
//         if(checkfantasy[0]){
//             return res.status(200).json({ success: true, error: false, details: checkfantasy })
//         }
//         if(checkfiction[0]){
//             return res.status(200).json({ success: true, error: false, details: checkfiction })
//         }
//         if(checkromance[0]){
//             return res.status(200).json({ success: true, error: false, details: checkromance })
//         }
//         if(checkmystery[0]){
//             return res.status(200).json({ success: true, error: false, details: checkmystery})
//         }
//         if(checkscifi[0]){
//             return res.status(200).json({ success: true, error: false, details: checkscifi})
//         }
//         if(!check1 && !checkfantasy && !checkfiction && !checkmystery && !checkromance && !checkscifi){
//             return res.status(200).json({ success: true, error: false, details: bookgenre1 })
//         }

//         else {
//             return res.status(400).json({ success: "false", error: "true", message: "checkbox error" })

//         }


//     } catch (error) {
//         return res.status(400).json({ success: "false", error: "true", message: "Something went wrong" })

//     }
// })


bookRouter.get('/:genre', async function (req, res) {

    try {
        const genre = req.params.genre
        const Genre = await bookmodel.find({ bookgenre:genre })
        if (Genre) {
            return res.status(200).json({ success: true, error: false, details: Genre });

        }
        else{
            return res.status(200).json({ success: false, error: true, message:"error" });

        }
    } catch (error) {
        return res.status(200).json({ success: false, error: true, message:"Something went wrong" });
        
    }

})

bookRouter.get('/bookview/:id',async function(req,res){
    try {
        const bookid= req.params.id
        const bookview = await bookmodel.findOne({_id:bookid})
        if(bookview){
            return res.status(200).json({success:true,error:false,details:bookview})
        }
        else{
            return res.status(200).json({ success: false, error: true, message:"error" });

        }
    } catch (error) {
        return res.status(200).json({ success: false, error: true, message:"Something went wrong" });
    }
})




module.exports = bookRouter