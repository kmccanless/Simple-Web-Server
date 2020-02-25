var http = require('http')
    , port
    , greeting;

port = Number(process.env.PORT) || 8080;
greeting = process.env.MESSAGE || "hello";

var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(greeting);
    res.end();
  }).listen(port);
console.log("Server listening on port %s", port);

server.on('error',function(e){
  console.log(e);
})