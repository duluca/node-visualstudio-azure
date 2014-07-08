'use strict';

var http = require('http');
var port = process.env.port || 1337;
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    var text = 'Hello DC 1\n';
    res.end(text);
}).listen(port);