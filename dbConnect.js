const mongoose = require('mongoose')

const URL = 'mongodb+srv://PravinPilania:Pravindb@cluster0.etazzzi.mongodb.net/resume-builder'
mongoose.connect(URL , {useUnifiedTopology:true , useNewUrlParser:true})

const connection = mongoose.connection

connection.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull')
})
connection.on('error' , (error)=>{
    console.log(error)
})

