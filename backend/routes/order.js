const express=require('express')
const order = require('../models/orderitem')
const router=express.Router()


router.get('/allorder', (req, res) => {
     res.send('allOrders');   
  });
  
router.get('/:id',async(req,res)=>{
    const {id}=req.params
    console.log('come')
    try{
    const getorder=await order.findById(id)
    res.json(getorder)}
    catch(err){
        res.send(err)
    }
})

router.post('/',async(req,res)=>{
    const {orderitem,itemprice,shippingaddress,paymentmethod,userid}=req.body
    console.log(req.user)
    try{
    if (orderitem.length==0){
        res.send('no order placed')
    }
    else{
        const order1=new order({
            orderitems:orderitem.map((x)=>({...x,product:x._id})),
        
            itemprice,
            shippingaddress,
            paymentmethod,
            userid
        })
        const createdorder=await order1.save()
        res.json(createdorder)

        
    }}
    catch(err){
        res.send(err)
    }
   
    
})
router.put('/update/:id',async(req,res)=>{
    const {id}=req.params
    const update={paymentresult:true}
    try{
    const res1=await order.findByIdAndUpdate(id,update)
    res.json(res1)
    }
    catch(err){
        res.send(err)
    }
    
})

module.exports=router

