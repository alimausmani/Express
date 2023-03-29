const mongoose=require('mongoose')

let blog= mongoose.Schema({
    title:String,
    subtitle:String,
    body:String,
    mobile:Number
})


let  blogs= mongoose.model('blogs',blog)
module.exports=blogs