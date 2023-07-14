const mongoose=require('mongoose');
const user = require('./user');

const Schema = mongoose.Schema;
const orderschema=mongoose.Schema({
    userid:{
       type:String,
        
    },
    orderitems:[
        {
            name:{
                type:String,
        
            },
            quantity:{
                
                type:Number,
                
            },
            image:{
                type:String,
                
            },
            price:{
                type:Number,
                
            },
            product:{
                type:mongoose.Schema.Types.ObjectId,
                
                ref:'product'
            }

        }
    ],
    shippingaddress:{
        Address:{
            type:String,
            required:true},
        postcode:{
            type:Number,
            required:true},
        city:{
            type:String,
            required:true
        }
        
    },
    paymentmethod:{
        
        type:String,
    
    },
    paymentresult:{
        
            type:Boolean,
            default:false


    },
    itemprice:{
        
        type:Number,
        required:true
    },
    isdeliverd:{
        
        type:Boolean,
        default:false
        
    }
  
    


    
        
    
},{timestamps:true})
const order=mongoose.model('order',orderschema)
module.exports=order