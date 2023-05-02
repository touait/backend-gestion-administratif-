const express=require('express');
const utilisateurapi=require('./routes/utilisateur');
const inscriptionapi=require('./routes/inscription');
const formationapi=require('./routes/formation');
const abscenceapi=require('./routes/abscence');
const materielapi=require('./routes/materiel');
const cors=require('cors');
require('./config/connect');

const app=express();
app.use(express.json());
 app.use(cors());
//router api
app.use('/utilisateur',utilisateurapi);
app.use('/inscription',inscriptionapi);
app.use('/formation',formationapi);
app.use('/abscence',abscenceapi);
app.use('/materiel',materielapi);


//get image dossier iamage avec chaque article quand va afficher
app.use('/getimage',express.static('./uploads'));

app.listen(3000,()=>{
    console.log('server work');
})