var http = require('http'),
    url = require('url'),
    port = process.env.PORT || 3000;
http.createServer(function (req, res) {
    var path = url.parse(req.url).pathname || "";

    res.writeHead(301, {'Location': process.env.LOCATION + path});
    res.end();
}).listen(port, function(){
  console.log("Forwarder started on port " + port);
});
