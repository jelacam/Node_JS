var express = require('express');
var app = express();

// web app ce biti kreirana na portu 3000
app.set('port', process.env.PORT || 3000);

// definisemo putanju '/' => localhost:3000/
app.get('/', function(req, res){
    res.send('Express Works');
});

// slusa na portu i izvrasav callback 
app.listen(app.get('port'), function(){
    console.log("Express started press CTRL-C to terminate");
});
