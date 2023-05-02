const express = require('express');
const router = express.Router();

const Materiel=require('../models/materiel');


//methode ajouter
router.post('/ajout',(req , res)=>{
    let data=req.body;
    let materiel=new Materiel(data);
    materiel.date=new Date();

    materiel.save().then(
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
        Materiel.find({})
        .then(
            (materiel)=>{
                res.status(200).send(materiel);
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
    Materiel.findOne({_id:id},)
    .then(
        (materiel)=>{
            res.status(200).send(materiel);
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
    Materiel.findByIdAndDelete({_id:id})
    .then(
        (materiel)=>{
            res.status(200).send(materiel);
        }
    )
    .catch(err=>{
        res.status(400).send(err);
    })

    
})



router.put('/update/:id', (req , res)=>{
    let id=req.params.id
    let data=req.body;

    Materiel.findByIdAndUpdate({_id:id},data)
    .then(
        (materiel)=>{
            res.status(200).send(materiel);
        }
    )
    .catch(
        (err)=>{
            res.status(400).send(err);
        }
    )
})



    module.exports=router;