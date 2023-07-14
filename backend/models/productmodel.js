const mongoose=require('mongoose')

const reviewschema= new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
    
        ref:'user'
    },
    name:{
        type:String,
        
    },
    rating:{
        type:Number,

    },
    comment:{
        type:String,
        
    }
    
})

const productshcema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        
        ref:'user'
    },
    
    name:{
        type:String,
        
    },
    image:{ 
        type:String,
        
    },
    description:{
        type:String,
        
    },
    brand:{
        type:String,
        
    },
    price:{
        type:Number,
        
    },
    countInStock:{
        type:Number,
        
    },
    rating:{
        type:Number,
        default:0
    },
    reviews:[{
        userid:{
            type:String
        },
        name:{
            type:String,
            
        },
        rating:{
            type:Number,
    
        },
        comment:{
            type:String,
        }    
    }
    ],
    numReviews:{
        type:Number,
        default:0
    }


},{timestamps:true})


const product =mongoose.model('product',productshcema)

module.exports=product