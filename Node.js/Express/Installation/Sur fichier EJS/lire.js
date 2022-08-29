
const express = require('express');
const app = express();
const path =require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname+ '/'));
let fichier="Je suis un fichier qui peut-être dynamiquement modifié";
var data = {
    portal : "GeeksforGeeks",
    knowledge : "unlimited",
    location : "Noida"  
}
app.get('/',(req,res)=>{
    res.render('connexion.ejs',{
        fichier_dynamique:fichier,
        json:data
    });
})
let server=app.listen(3000, ()=>{
    console.log("Serveur localhost:", server.address().port);
});
