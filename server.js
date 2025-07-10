// Load the http module
import http from "http"

function handleRequest(req, res){
  const id = req.url.slice(1).split("=")[1]
  res.end("user has sent id : "+id);
}

// Create the server
const server = http.createServer(handleRequest);

function listenServer()  {
  console.log("Server running at PORT: 3000");
}
// Start the server
server.listen(3000, listenServer);
