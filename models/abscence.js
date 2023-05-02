const mongoose = require('mongoose');

const Abscence=mongoose.model('Abscence', {
    nom:{
        type:String 
     },
     prenom:{
        type:String 
     },
     formation:{
        type:String ,
     },
     abscence:{
        type:String,
     },
     date:{
       type:String,
     }
     
})

module.exports=Abscence;