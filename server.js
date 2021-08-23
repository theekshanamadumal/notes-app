const express = require('express')
const app = express()
const cors=require("cors")
const path= require('path')
const  mongoose  = require('mongoose')

app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,"public")))
app.use(cors())
app.use(express.json())

app.use("/",require("./routes/noteRoute"));


mongoose.connect("mongodb+srv://user:userPassword@cluster0.guviv.mongodb.net/noteDB")
 
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))

app.get('/',(req,res)=>{
     res.send("home page")
})

app.get('/about',(req,res)=>{
     res.send("welcome about page")
}) 


const port=3001;

app.listen(port,function () {console.log('server on:',port);})

//mongosh "mongodb+srv://cluster0.guviv.mongodb.net/notesDB" --username user
//user userPassword
