// Load the http module
import http from "http"
import sum from "./sum.js"
function handleRequest(req, res){
  const nums = req.url.slice(1).split("&")
  const result = sum(nums[0]?.split("=")[1], nums[1]?.split("=")[1])
  res.end("sum of : "+nums[0]?.split("=")[1]+" and "+nums[1]?.split("=")[1]+" is "+ result);
}

// Create the server
const server = http.createServer(handleRequest);

function listenServer()  {
  console.log("Server running at PORT: 3000");
}
// Start the server
server.listen(3000, listenServer);
