const express = require('express');
const app = express();

// acces à la liste
app.get('/liste', function(req, res){
    res.sendFile(__dirname + '/data.json');
})

// affiche index.html 
app.get('/', function(req, res){
    res.sendFile(__dirname + '/front/index.html');
})

// récupere le fichier main.js pour la vue
app.get('/main.js', function(req, res){
    res.sendFile(__dirname + '/front/main.js');
})


app.listen(3012, function(){
    console.log('app On sur le port 3012');
})
