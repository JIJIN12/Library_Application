const express = require('express');
const signinRouter = require('./src/routes/signinRouter');
const signupRouter = require('./src/routes/signupRouter');
const bookRouter = require('./src/routes/bookRouter');
const bodyParser = require('body-parser');
const { default: mongoose } = require('mongoose');
const authorRouter = require('./src/routes/authorRouter');
const profileRouter = require('./src/routes/profileRouter');
const app = express();

app.use(bodyParser())
app.use(express.urlencoded({extended:true}))
app.use((req, res, next) => {

    res.setHeader("Access-Control-Allow-Origin", "*"); //  * every url can access
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader( 
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });


app.use('/signin',signinRouter)
app.use('/signup',signupRouter)
app.use('/book',bookRouter)
app.use('/author',authorRouter)
app.use('/profile',profileRouter)


const url = 'mongodb+srv://jijinsuresh6:jijinsuresh6@cluster0.dh7smys.mongodb.net/LIBRARY_SERVER?retryWrites=true&w=majority' 

mongoose.connect(url).then(()=>{
    app.listen(2000,function(){
        console.log("started http://localhost:2000");
    })
}).catch((error)=>{
    console.log(error);
})
