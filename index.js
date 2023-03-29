const { json } = require('body-parser')
const express = require('express')
const mongoose= require('mongoose')
const Blog=require('./model')
const app=express()
// connection
app.use(express.json())
mongoose.set("strictQuery", false);

mongoose.connect('mongodb://localhost:27017/blog').catch((e)=>console.log(e))



//apis
// req params
app.get('/params/:id',(req,res)=>{
    res.send({
        name:'alima',
        surname: 'shah',
        id:req.params.id

    })
})
// req.query
app.get('/query',(req,res)=>{
    res.send({
        name:'alima',
        surname: 'shah',
        queryObj:req.query

    })
})
// server


app.post('/body',async(req,res)=>{
    let {body,title,subtitle,mobile}=req.body
    let createBlog= await new Blog({
        title:title,
        body:body,
        subtitle:subtitle,
        mobile:mobile
    })
    
    await createBlog.save((err)=>console.log(err))
    res.send(createBlog)
})

app.get('/find/:title',async(req,res)=>{
    let result= await Blog.find({title:req.params.title})
    res.send(result)
     
})
app.listen(3000,(err)=>{

    
err?console.log(err):console.log('server is started at 3000')
})