const express = require('express');
const router = express.Router();

const Inscription=require('../models/inscription');

const multer=require('multer');

//API uploed file widh multer

filename='';
const mystorage=multer.diskStorage({

    destination:'./uploads',
    filename:(req , file ,redirect)=>{
        let date=Date.now();
        let fl = date + '.' + file.mimetype.split('/')[1];
        //7845845887.png example
        redirect(null,fl);
        filename=fl;
    }
})

const upload=multer({storage:mystorage})


router.post('/ajout',upload.any('image') , (req , res)=>{
let data=req.body;
let inscription=new Inscription(data);
inscription.image=filename;

inscription.save().then(
    (saved)=>{
        filename='';
        res.status(200).send(saved);
    }
)
.catch(
    err=>{
        res.status(400).send(err)
    }
    )

})

//api get all
router.get('/getall',(req , res)=>{
    Inscription.find({})
    .then(
        (inscription)=>{
            res.status(200).send(inscription);
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
    Inscription.findOne({_id:id},)
    .then(
        (inscription)=>{
            res.status(200).send(inscription);
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
    Inscription.findByIdAndDelete({_id:id})
    .then(
        (inscription)=>{
            res.status(200).send(inscription);
        }
    )
    .catch(err=>{
        res.status(400).send(err);
    })
    
})


router.put('/update/:id', upload.any('image'),(req , res)=>{
    let id=req.params.id
    let data=req.body;

    if(filename.length>0){
        data.image=filename;
    }

    Inscription.findByIdAndUpdate({_id:id},data)
    .then(
        (inscription)=>{
            filename='';
            res.status(200).send(inscription);
        }
    )
    .catch(
        (err)=>{
            res.status(400).send(err);
        }
    )
})


module.exports=router;