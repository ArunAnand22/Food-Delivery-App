//import mongoose
const mongoose=require('mongoose')
//connection string
//mongodb://localhost:27017
mongoose.connect('mongodb://127.0.0.1:27017/items',()=>{
    console.log('connected to mongodb');
})
//model for products
const Item=mongoose.model('Item',{
    //schema creation
    id:Number,
    category:String,
    name:String,
    price:Number,
    image:String
})

//create a new collection in mongodb
//create a model
const Wishlist=mongoose.model('wishlist',{
    id:Number,
    name:String,
    category:String,
    image:String,
    price:Number
  })

//export model
module.exports={
    Item,
    Wishlist
}