var http = require('http');


http.createServer((req, res) => {
  console.log(req.url);
  
  if (req.url == "/") { res.end('<h1>Home section</h1>'); }
  else if (req.url == "/about"){res.end('<h1>About section</h1>')}
  else if (req.url == "/contacts") {res.end('<h1>Contacts section</h1>')}

  else { 
    res.writeHead(404,{"content-type" : "text/html"});
    res.end("<br><h1>404 Page Not Found</h1>"); }

}).listen(80); //the server object listens on port 


