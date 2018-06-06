const express = require('express');
const app = express();

// acces à la liste
app.get('/liste', function(req, res){
    res.sendFile(__dirname + '/data.json');
})


app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
})

app.get('/main.js', function(req, res){
    res.sendFile(__dirname + '/main.js');
})

app.listen(3012, function(){
    console.log('Server On');
})
