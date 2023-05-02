const express=require('express');
const router=express.Router();
const Abscence=require('../models/abscence');


//methode ajouter
 router.post('/ajout',(req , res)=>{
    let data=req.body;
    let abscence=new Abscence(data);
    // abscence.date=new Date();

    abscence.save().then(
        (saved)=>{
            res.status(200).send(saved);
        }
    )
    .catch(
        err=>{
            res.status(400).send(err)
        }
        )
    
    })

  
    //afficher tout
    router.get('/getall',(req , res)=>{
        Abscence.find({})
        .then(
            (abscence)=>{
                res.status(200).send(abscence);
            }
        )
        .catch(
            (err)=>{
                res.status(400).send(err);
            }
        )
        
    })

    

    //api get byId
router.get('/getbyid/:id',(req , res)=>{
    let id=req.params.id;
    Abscence.findOne({_id:id},)
    .then(
        (abscence)=>{
            res.status(200).send(abscence);
        }
    )
    .catch(
        (err)=>{
            res.status(400).send(err);
        }
    ) 
})



router.delete('/delete/:id',(req , res)=>{
    let id=req.params.id
    Abscence.findByIdAndDelete({_id:id})
    .then(
        (abscence)=>{
            res.status(200).send(abscence);
        }
    )
    .catch(err=>{
        res.status(400).send(err);
    })

    
})


router.put('/update/:id', (req , res)=>{
    let id=req.params.id
    let data=req.body;

    Abscence.findByIdAndUpdate({_id:id},data)
    .then(
        (abscence)=>{
            res.status(200).send(abscence);
        }
    )
    .catch(
        (err)=>{
            res.status(400).send(err);
        }
    )
})





module.exports=router;
