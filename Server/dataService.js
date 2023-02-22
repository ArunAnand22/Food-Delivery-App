//import db
const { default: mongoose } = require('mongoose')
const db=require('./db')
///get item details from db
const getProducts=()=>{
    return db.Item.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    product:result
                }
            }else{
                return{
                    status:false,
                    statusCode:401,
                    message:'Product not found'
                }
            }
        }
    )
}
//add to wishlist to db
const addtowishlist=(id,name,category,image,price)=>{
    return db.Wishlist.findOne({id}).then(
        (result)=>{
            if(result){
                return{
                    status:false,
                    statusCode:401,
                    message:'Product already in wishlist'
                }
            }else{
                const newProduct=new db.Wishlist({
                    id,
                    name,
                    category,
                    image,
                    price
                })
                newProduct.save()
                return{
                    status:true,
                    statusCode:200,
                    message:'Product added successfully'
                }
            }
        }
    )
}
//get items from wishlist
const getwishlist=()=>{
    return db.Wishlist.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    products:result
                }
            }else{
                return{
                    status:false,
                    statusCode:401,
                    message:'Wishlist is empty'
                }
            }
        }
    )
}
//delete from wishlist
const deletewishlist=(id)=>{
    return db.Wishlist.deleteOne({id}).then(
            (result)=>{
                if(result){
                    return{
                        status:true,
                        statusCode:200,
                        products:result,
                        message:'Product removed successfully'
                    }
                }else{
                    return{
                        status:false,
                        statusCode:401,
                        message:'Wishlist is empty'
                    }
                }
            }
        )
    
}

module.exports={
    getProducts,
    addtowishlist,
    getwishlist,
    deletewishlist
}