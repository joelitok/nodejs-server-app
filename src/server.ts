
import express, { Request, Response} from "express";
//import express = require("express");
import serveStatic from "serve-static";
export default class Server{

constructor(private port:number){

    const app=express()
    app.use(serveStatic("public"))
app.get("/",(req:Request,resp:Response)=>{
resp.send("hello express type Script....");

    });
    app.listen(this.port,()=>{
        console.log("Server Started");
    })
}
}















/*premier teste de mon projet nodejs*/
/*
var express=require("express");
var app= express();
app.get("/", (req,resp)=>{
resp.setHeader("content-type", "text/html");
resp.send("<h3>hello express</h3>")
});

app.get("/books/:code", (req,resp)=>{
resp.setHeader("content-type","application/json");
var infos={
    name:"joel",
    email:"joelnkouatchet@gmail.com",
    code:req.params.code
}
resp.send(JSON.stringify(infos));
});

app.listen(7000,()=>{
    console.log("server started");
})

*/
































/*var http=require("http");//pour effectuer des requete http
var url=require("url");// pour recuperer les elements a partie de l URL
var queryString=require("querystring");// pour recuperer les chaines de caracteres a partie des l URL
var httpServer=http.createServer(function(req,resp){
console.log(url.parse(req.url,true).path);
query=url.parse(req.url).query;
params=queryString.parse(query);
nom=params['nom'];

resp.writeHead(200,{'content-type':'text/html'});

resp.end("<h2> teste node js server"+nom+"<h2>");
});
httpServer.listen(8889,function(){
    console.log("node server started");
}

)*/