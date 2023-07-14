const express=require('express')
const router =express.Router()
const order=require('../models/orderitem')

router.get('/orders/:id',async(req,res)=>{
    const {id}=req.params
    console.log(id)
    try{
    const allorder=await order.find({userid:id})
    res.json(allorder)}
    catch(err){
        res.send(err)
    }
})

module.exports=router