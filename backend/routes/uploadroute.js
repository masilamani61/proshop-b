const express=require('express')
const multer=require('multer')
const router=express.Router()

const storage=multer.diskStorage({
    destination:(req,res,cb)=>cb(null,'../uploads'),
    filename:(req,file,cb)=>{
        cb(null,`${Date.now()}--${file.originalname}`)
    }
})

const uploads=multer({storage})

router.post('/upload',uploads.single('image'),(req,res)=>{
    console.log(req.body)

    res.send({
        'imagepath':req.filepath
    })
})
module.exports=router