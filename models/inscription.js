const mongoose = require('mongoose');

const Inscription=mongoose.model('Inscription', {
    cin:{
        type:Number,
        
     },
     nom:{
        type:String 
     },
     prenom:{
        type:String 
     },
     email:{
        type:String ,
       
     },
     telephone:{
        type:Number,
       
     },
     image:{
        type:String 
     },
     formation:{
        type:String 
     },
     payement:{
        type:Number 
     }
     
})

module.exports=Inscription;