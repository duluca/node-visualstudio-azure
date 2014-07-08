var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res){
	var reqUrl = url.parse(req.url, true);
	var path = reqUrl.pathname;

	if(req.method === "GET") {
		var isoDateTime = reqUrl.query.iso;
		var date = new Date(isoDateTime);

		var resObject;

		switch(path){
			case "/api/parsetime": 
 				resObject = {
 					"hour": date.getHours(),
 					"minute": date.getMinutes(),
 					"second": date.getSeconds()
 				}
			 	break;
			case "/api/unixtime": 
				resObject = {
					"unixtime": date.getTime()
				}
				break;
			default:
				resObject = "Hello world!";
				break;
		}

		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.write(JSON.stringify(resObject));
		res.end();
	}
});

server.listen(2222);