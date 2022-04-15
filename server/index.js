const express = require('express')
const app = express()
const cors=require('cors')
let updateFun=require('./modeler/functions')

app.use(express.static(__dirname+"/public"));
app.use(cors())

let errorHandler=function(error){console.log(error)}


app.post('/washProcess/:orderID/:totalItems', function(req,res){
  updateFun.washingFun(req.params.orderID,req.params.totalItems,res);
})

app.post('/ironProcess/:orderID/:totalItems', function(req,res){
  updateFun.ironingFun(req.params.orderID,req.params.totalItems,res);
})


app.listen(5000,function(error){
  if(error){
    console.log(error)
  }
  else{
    console.log('Listening at 5000')
  }
})