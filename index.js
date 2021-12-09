const { request, response } = require("express");
var express = require("express");
var apiServer= express(); 

console.log("funzia");
var a=5;
var b="3";
console.log(a+b);

var port = 3000;
var host = "localhost";
apiServer.listen(port, host, ()=>{
    console.log("server running at http://%s:%d", host, port);
});
apiServer.get("/", (request, response)=>{
    console.log("sono in get /");
    response.send("<h1>ciao client sei in home</h1>");
});
apiServer.get("/nome", (request, response)=>{
    console.log("sono in get /");
    response.send("<h1> il mio nome è Giussani</h1>");
});

// apiServer.get("/mioNome" , (request, response)=>{
//     console.log("sono in get /");
//     var nome= request.query;
//     response.send("<h1>"+nome+"</h1>");
    
// });

apiServer.get("/mioNome",(request,response)=>{
    console.log("sono in get /");
    response.send("<h1>"+request.query.nome+"</h1>");
})
apiServer.get("/somma",(request,response)=>{
    console.log("sono in get /", request.query);
    response.send("risultato= " +(request.query.a -(-request.query.b)));
})