const express = require('express');
const server = express();

// acces à la liste
server.get('/liste', function(req, res){
    res.sendFile(__dirname + '/data.json');
})

// affiche index.html 
server.get('/', function(req, res){
    res.sendFile(__dirname + '/front/index.html');
})

// récupere le fichier main.js pour la vue
server.get('/main.js', function(req, res){
    res.sendFile(__dirname + '/front/main.js');
})


server.listen(3012, function(){
    console.log('Server On sur le port 3012');
})
