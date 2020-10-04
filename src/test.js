const http = require('http');
const path = require("path");
const fs = require("fs")

const server =  http.createServer((req, res) =>{
    if(req.url === "/"){
        res.end('<h1>Home</h1>')
    }
});

const PORT = 5000 || process.env.PORT ;



server.listen(PORT, () => console.log("Server Running on port: ", PORT));