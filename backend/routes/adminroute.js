const express=require('express')
const router=express.Router()
const order=require('../models/orderitem')
const product=require('../models/productmodel')
const { count } = require('../models/user')

router.get('/orders',async(req,res)=>{
    try{
    const ans=await order.find({})
    res.json(ans)
    }
    catch(err){
        res.send(err)
    }
})
module.exports=router
router.put('/:id',async(req,res)=>{
    const {id}=req.params
    try{
    const ans=await order.findById(id)
    if (ans){
        ans.isdeliverd=true
        const updatedorder=await ans.save()
        res.json(updatedorder)
    }
    else{
        console.log('id invalid')
    }}
    catch(err){
        res.send(err)
    }
})
router.post('/product',async(req,res)=>{
    try{
    const ans= new product({
        name:'sample',
        price:0,
        countInStock:0,
        brand:'sample',
        image:''

    })
    const res1=ans.save()
    res.json(res1)
}
catch(err){
    res.send(err)
}

})
router.put('/product/:id',async(req,res)=>{
    const {name,price,brand,count,rating,image,desc}=req.body
    const {id}=req.params
    try{
    const ans=await product.findById(id)
    if (ans){
        ans.name=name,
        ans.price=price,
        ans.brand=brand,
        ans.countInStock=count,
        ans.rating=rating
        ans.image=image
        ans.description=desc
      
    }
    const ress=await ans.save()
    res.json(ress)
    }
    catch(err){
        res.send(err)
    }
})
router.delete('/product/:id',async(req,res)=>{
    const {id}=req.params
    try{
    const ans=await product.findByIdAndDelete(id)
    res.send('sucess')
    }
    catch(err){
        res.send(err)
    }
})
router.get('/product/all',async(req,res)=>{
    try{
    const ans=await product.find({})
    res.send(ans)}
    catch(err){
        res.send(err)
    }
})