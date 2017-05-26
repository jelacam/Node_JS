// http je modul za kreiranje jednostavnih servisa
// nema ./http jer http nije lokalni modul 
var http = require('http');
var server = http.createServer(engine);

server.listen(1237, function(){
    // svaki put kad node dobije zahtev okinuce se ova funkcija
    console.log('Server was hit by a request');

});

function engine(request, response){
    console.log(response);
   // response.writeHead(200, {'Content-Type': 'text/plane'});

   // response.end('Poz');
}
