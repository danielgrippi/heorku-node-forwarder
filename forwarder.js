var http = require('http'),
    port = process.env.PORT || 3000;
http.createServer(function (req, res) {
    res.writeHead(301, {'Location': process.env.LOCATION});
    res.end();
}).listen(port, function(){
  console.log("Forwarder started on port " + port);
});
