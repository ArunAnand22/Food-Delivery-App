//import express
const express=require('express')
//import cors for integration
const cors=require('cors')
//import dataService
const dataService=require('./dataService')
//app using express
const app = express()
//use json parse for server application
app.use(express.json())
//using cors to specify origin of server
app.use(cors({
    origin:'http://localhost:4200'
}))
//setup a port number
app.listen(3000,(req,res)=>{
    console.log('Listening to port 3000');
})
//api call to get all products
app.get('/all-items',(req,res)=>{
    dataService.getProducts().then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})
//api to add products to wishlist
app.post('/addtowishlist',(req,res)=>{
    dataService.addtowishlist(req.body.id,req.body.name,req.body.category,req.body.image,req.body.price).then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})
//api call to get all products from wishlist
app.get('/getwishlist',(req,res)=>{
    dataService.getwishlist().then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})
//api call to delete from wishlist
app.delete('/deletewishlist/:id',(req,res)=>{
    dataService.deletewishlist(req.params.id).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})