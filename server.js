var app = require('http').createServer(handler)
    , fs = require('fs')
    , port 
    , file ;

port = Number(process.argv[2]) || Number(process.env.PORT) || 3000;
file = process.argv[3] || process.env.FILE;
app.listen(port);
console.log("Server listening on port %s", port);

function handler (req, res) {
    fs.readFile(file,
        function (err, data) {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading file');
            }
            res.writeHead(200);
            res.end(data);
        });
}

