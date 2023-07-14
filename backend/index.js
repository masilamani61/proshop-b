var products=require('./data/product.js')
const mongoose=require('mongoose')
const express=require('express')
const productroute=require('./routes/product.js')
const userroute=require('./routes/userroute.js')
const ordreroute=require('./routes/order.js')
const userorderroute=require('./routes/getollorder.js')
const adminroute=require('./routes/adminroute.js')
const uploadroute=require('./routes/uploadroute.js')
const cors=require('cors')
var path=require('path')
const production='production'
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
mongoose.connect('mongodb+srv://vgmasilamani61:Masila12@cluster0.kuuobcs.mongodb.net/productshop?retryWrites=true&w=majority').then(
    console.log('connected')
)

app.use('/api/product',productroute)
app.use('/admin',adminroute)
app.use('/api/user',userroute)
app.use('/api/order',ordreroute)
app.use('/user',userorderroute)
app.use('/image',uploadroute)
const __dirname1=path.resolve()

   
app.get('/',(req,res)=>{
    res.send('api is running')
})

app.listen(5000,()=>{console.log('running')}) 