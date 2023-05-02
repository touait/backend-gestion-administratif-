const mongoose = require('mongoose');

const Formation=mongoose.model('Formation', {
    nomformation:{
        type:String 
     },
     nbreHeure:{
        type:Number 
     },
     dateDebu:{
        type: String,
     },
     dateFin:{
        type:String,
     },
     description:{
        type:String 
     },
     prix:{
        type:Number 
     }
    
     
})

module.exports=Formation;