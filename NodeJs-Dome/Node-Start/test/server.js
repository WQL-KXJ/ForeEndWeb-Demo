var http = require("http")
http.createServer(
    function(request,response){
        
        response.writeHead(200,{'Content-type':'text/plain'});
        
        response.end("Hello KXJ")}
).listen(8888);


console.log("Server running at http://127.0.0.1:8888")


