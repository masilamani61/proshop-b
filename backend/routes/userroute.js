const express=require('express')
const user = require('../models/user')
const router=express.Router()
const jwt=require('jsonwebtoken')

router.post('/register',async(req,res)=>{

    const {name,email,password}=req.body
    try{
    const user1=await new user({
        name,
        email,
        password
    })
    await user1.save()
    const exist=await user.findOne({email})
   res.send(exist)
}

catch(err){
    res.send(err)
}
})


router.post('/login',async(req,res)=>{
    const {email,password}=req.body
    console.log(email,password)
    try{
    const exist=await user.findOne({email})
    if (exist){
        if(exist.password===password){
            const token=jwt.sign({userid:exist._id},'abc',{expiresIn:"30d"})
           
            res.send(exist)
        }
        else{
            res.send('not found')
        }
    }
    console.log(exist)
}
catch(err){
    res.send(err)
}
})
router.put('/update',async(req,res)=>{
   const {id,name,password,email}=req.body
   try{
   const res2=await user.findByIdAndUpdate(id,{name,password,email})

    res.send(res2)}
    catch(err){
        res.send(err)
    }
}
)
router.delete('/delete',async(req,res)=>{
    res.send('delete')
})
router.get('/:id',async(req,res)=>{
    const {id}=req.params
    try{
    const ans=await user.findById(id)
    res.send(ans)}
    catch(err){
        res.send(err)
    }
})

module.exports=router