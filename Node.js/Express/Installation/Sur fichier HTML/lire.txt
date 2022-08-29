const express = require('express');
const app = express();
const path =require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname+ '/'));

app.get('/',(req,res)=>{
    console.log(req.route.path);
    res.sendFile(path.join(__dirname, './connexion.html'));
});
// console.log(x.route);
let server=app.listen(3000, ()=>{
    console.log("Serveur localhost:", server.address().port);
});
