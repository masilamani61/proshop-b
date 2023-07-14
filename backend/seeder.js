const mongoose=require('mongoose')
const user = require('./models/user')
const user1 = require('./data/user')
const product = require('./models/productmodel')
const products = require('./data/product')

mongoose.connect('mongodb+srv://vgmasilamani61:Masila12@cluster0.kuuobcs.mongodb.net/productshop?retryWrites=true&w=majority')

const importdata=async()=>{
    try{
        const createduser=await user.insertMany(user1[0])
        const adminuser=createduser[0]._id

        const products1=products.map((p)=>{
            return{...p,user:adminuser}
        })
        const productd=await product.insertMany(products1)
        console.log('sucees imported')
        
    }
    catch(err){
        console.log(err)
    }
}

const destroydata=async()=>{
    try{
      
        await user.deleteMany()
        await product.deleteMany()
        console.log('sucees deleted')
        
    }
    catch{
        console.log('error')
    }

}

if (process.argv[2]=='i'){
    importdata()
}
else{
    destroydata()
}