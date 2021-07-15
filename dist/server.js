"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//import express = require("express");
const serve_static_1 = __importDefault(require("serve-static"));
class Server {
    constructor(port) {
        this.port = port;
        const app = express_1.default();
        app.use(serve_static_1.default("public"));
        app.get("/", (req, resp) => {
            resp.send("hello express type Script....");
        });
        app.listen(this.port, () => {
            console.log("Server Started");
        });
    }
}
exports.default = Server;
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
