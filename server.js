// Load the http module
import express from "express"
import sum from "./sum.js"

function handleRequest(req, res){
  const {a, b} = req.body
  res.json({result: sum(a, b)});
}

// Create the server
const server = express();

// Middleware to parse JSON
server.use(express.json());

// Serve static files (HTML, CSS, JS) from "public" folder
server.use(express.static('public'));

server.post("/sum",handleRequest)

function listenServer()  {
  console.log("Server running at PORT: 3000");
}
// Start the server
server.listen(3000, listenServer);