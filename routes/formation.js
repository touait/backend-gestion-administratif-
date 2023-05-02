const express = require('express');
const router = express.Router();

const Formation = require('../models/formation');


router.post('/ajout', (req , res)=>{
    let data=req.body;
    let formation=new Formation(data);
    
    formation.save().then(
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

//afficher tout les formation
    router.get('/getall',(req , res)=>{
        Formation.find({}).then(
            (formation)=>{
                res.status(200).send(formation);
            }
        )
        .catch(
            (err)=>{
                res.status(400).send(err);
            }
        )
        
    })

// afficher avec id
    router.get('/getbyid/:id',(req , res)=>{
        let id=req.params.id;
        Formation.findOne({_id:id},)
        .then(
            (formation)=>{
                res.status(200).send(formation);
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
        Formation.findByIdAndDelete({_id:id})
        .then(
            (formation)=>{
                res.status(200).send(formation);
            }
        )
        .catch(err=>{
            res.status(400).send(err);
        })
    
        
    })


    router.put('/update/:id', (req , res)=>{
        let id=req.params.id
        let data=req.body;
    
        Formation.findByIdAndUpdate({_id:id},data)
        .then(
            (formation)=>{
                res.status(200).send(formation);
            }
        )
        .catch(
            (err)=>{
                res.status(400).send(err);
            }
        )
    })
    



module.exports=router;