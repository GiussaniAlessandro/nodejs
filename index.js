const { request, response } = require("express");
var express = require("express");
var apiServer= express(); 
var fs = require("fs");

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
// apiServer.get("/nome", (request, response)=>{
//     console.log("sono in get /");
//     response.send("<h1> il mio nome è Giussani</h1>");
// });

// apiServer.get("/mioNome" , (request, response)=>{
//     console.log("sono in get /");
//     var nome= request.query;
//     response.send("<h1>"+nome+"</h1>");
    
// });

// apiServer.get("/mioNome",(request,response)=>{
//     console.log("sono in get /");
//     response.send("<h1>"+request.query.nome+"</h1>");
// })
//http:localhost:3000/somma?a=1&b=2
apiServer.get("/somma",(request,response)=>{
    console.log("sono in get /", request.query);
    response.send("<h1> risultato= " +(request.query.a -(-request.query.b))+"</h1>");
});
//http:localhost:3000/studenti?id=1
apiServer.get("/student",(request,response)=>{
    console.log("student id:", request.query);
    //leggere il file
    fs.readFile("studenti.json", (err, data) =>{
        if(err) {
            console.log("errore: "+err);
        }
        else{
            var students= JSON.parse(data);
            response.send(
                students.find(x=> x.id == request.query.id));
                
            };
            // console.log("students: "+students[i].id);
        });
    });
        apiServer.get("/studenti",(request,response)=>{
            data= ',{' +"student name: " +request.query.nome+"student surname: "+ request.query.cognome+ "student id: "+ request.query.id+ '}';
        fs.writeFile("studenti.json", data, err => {
            if (err) {
              console.error(err)
              return
            };
            //file written successfully
          });
        });

    //prelevare l'oggetto con id 1
    //send 

    
