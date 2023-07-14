const express=require('express')
const product = require('../models/productmodel')

const router=express.Router()

router.get('/',async(req,res)=>{
    const pagesize=8
    const page=Number(req.query.pagenumber) || 1
    try{
    const keyword=(req.query.keyword!=='undefined')?{name:{$regex:req.query.keyword,$options:'i'}}:{}
    console.log(keyword,page)
    const count=await product.countDocuments({...keyword})
    const product1=await product.find({...keyword}).limit(pagesize).skip(pagesize*(page-1))
   
    res.status(200).json({product1,pageno:Math.ceil(count/pagesize)})
    }
    catch(err){
        res.send(err)
    }
})
router.get('/:id',async(req,res)=>{
    try{
    const prod=await product.findById(req.params.id)
    if (prod){
    res.send(prod)}
    else{
        res.send('not found')
    }
}catch(err){
    res.send(err)
}
})
router.put('/:id/reviews',async(req,res)=>{
    const {id}=req.params
    const {name,comment,userid,rating}=req.body
      const prod=await product.findById(req.params.id)
    try{
        prod.reviews.push({name,comment,userid,rating})
        prod.numReviews=prod.numReviews+1
        const ans=await prod.save()
        res.send(ans)  
    }
    catch(err){
        res.send(err)

    }
   
})

module.exports=router