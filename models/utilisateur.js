const mongoose = require('mongoose');

const Utilisateur=mongoose.model('Utilisateur', {
    nomU:{
        type:String 
     },
     prenom:{
        type:String 
     },
     email:{
        type:String ,
        unique:true
     },
     telephone:{
        type:Number 
     },
     role:{
        type:String 
     },
     image:{
        type:String 
     },
     password:{
        type:String 
     }
     
})

module.exports=Utilisateur;