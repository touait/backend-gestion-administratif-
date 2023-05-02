const mongoose = require('mongoose');

const Materiel=mongoose.model('Materiel', {
    typeEquip:{
        type:String 
     },
     nserie:{
        type:String 
     },
     marque:{
        type:String ,
     },
     model:{
        type:String,
     },
     destination:{
       type:String,
     },
     date:{
        type:Date,
      }
     
})

module.exports=Materiel;