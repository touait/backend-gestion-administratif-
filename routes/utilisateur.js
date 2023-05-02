const express = require('express');
const router = express.Router();

const Utilisateur = require('../models/utilisateur');
const multer=require('multer');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken')
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
let utilisateur=new Utilisateur(data);
utilisateur.image=filename;
// salt c'est un cle d cryptage
salt = bcrypt.genSaltSync(10);
utilisateur.password=bcrypt.hashSync(data.password, salt);

utilisateur.save().then(
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


router.post('/login', async(req,res)=>{
    data=req.body;
   utilisateur=await Utilisateur.findOne({email: data.email})
    
    if(!utilisateur){
        res.status(404).send('email or password invalid!')
    }else{
        validPass = bcrypt.compareSync(data.password, utilisateur.password); 

        if(!validPass){
            res.status(401).send('email or password incorrect!')
        }else{
            payload={
                _id:utilisateur._id,
                email:utilisateur.email,
                nom:utilisateur.nom,
                role:utilisateur.role,
            }
            token = jwt.sign(payload , '123456789');
             res.status(200).send({mytoken:token})
        }
    }
})





router.get('/getall',(req , res)=>{
    Utilisateur.find({}).then(
        (utilisateur)=>{
            res.status(200).send(utilisateur);
        }
    )
    .catch(
        (err)=>{
            res.status(400).send(err);
        }
    )
    
})

router.get('/getbyid/:id',(req , res)=>{
    let id=req.params.id;
    Utilisateur.findOne({_id:id},)
    .then(
        (utilisateur)=>{
            res.status(200).send(utilisateur);
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
    Utilisateur.findByIdAndDelete({_id:id})
    .then(
        (utilisateur)=>{
            res.status(200).send(utilisateur);
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

    Utilisateur.findByIdAndUpdate({_id:id},data)
    .then(
        (utilisateur)=>{
            filename='';
            res.status(200).send(utilisateur);
        }
    )
    .catch(
        (err)=>{
            res.status(400).send(err);
        }
    )
})



module.exports=router;