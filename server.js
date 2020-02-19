var http = require('http')
    , fs = require('fs')
    , port 
    , file ;

port = Number(process.env.PORT) || 8080;
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World Revision 1!');
    res.end();
  }).listen(port);
console.log("Server listening on port %s", port);
