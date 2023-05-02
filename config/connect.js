const mongoose = require ('mongoose');

//connexion avec le base de donné

mongoose.connect('mongodb://localhost:27017/pfeadmin' ,{useNewUrlParser: true});
const db = mongoose.connection;
db.once('open' , ()=>{
    console.log("database connected");
})
db.on('error' , err=>{
    console.log('connection error:' , err)
})

module.exports=mongoose;