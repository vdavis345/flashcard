const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser') 
const MongoClient = require('mongodb').MongoClient
app.set("view engine", "pug")
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + "/public"))

let db
let triviacards= []

MongoClient.connect('mongodb://vdavis:sandbox1@ds157873.mlab.com:57873/cardquestions',{useNewUrlParser: true}, (err,database) => {
    if (err) return console.log(err)
    db = database.db("cardquestions")
    app.listen(3000, function(){
        console.log("Listening on 3000")
    })
})

app.get("/",function(req,res) {
  let cursor = db.collection("newCard").find().toArray(function(err,results)  {
    if (err) return console.log(err)
    triviacards= results
    res.render('index.pug')
    console.log(triviacards)
})
  
})

app.get('/newCard', function(req,res) {
    res.send(triviacards)
})

app.post("/cardquestions", (req,res) => {
   db.collection('newCard').save(req.body, (err,result) => {
    if (err) return console.log(err)
    res.redirect('/')
    console.log(req.body)
    console.log("post successful")
})
})


    
    



