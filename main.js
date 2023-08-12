// http module

var http = require("http");
var server= http.createServer((req,res)=>{

   if(req.url=="/"){
     res.writeHead(200,{"content-type":"text/html"});
     res.write("<h1>this is home pagde</h1>");
     res.end();
    }

   else if    (req.url=="/about"){
           res.writeHead(200,{"content-type":"text/html"});
           res.write("<h1>this is about pagde</h1>");
           res.end();
    }
   else if (req.url=="/contact"){
               res.writeHead(200,{"content-type":"text/html"});
               res.write("<h1>this is contact pagde</h1>");
               res.end();
    }
});
server.listen(5050);
console.log("The server is Run")


var http = require("http");
var URL = require("url");
var server= http.createServer((req,res)=> {


var myURL = "http://rabbil.com/blog.html?year=2020&month=july";
var myURLObj = URL.parse(myURL,true);

    var myHostName=myURLObj.host;
    var myPathName=myURLObj.pathname;
    var mySearchName=myURLObj.search;

    res.writeHead(200,{"content-type":"text/html"});
    res.write(myHostName);
    res.end();
});
server.listen(5050);
console.log("The server is Run")


//fs module async
var fs=require("fs");
var http=require("http");
var server= http.createServer(function (req,res){

    if(req.url="/"){
        fs.readFile("index.html",function(err,data){
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(data);
            res.end();
        });
    }
});
server.listen(5050);
console.log("The server is Run");

//fs module Syn
var fs=require("fs");
var http=require("http");
var server= http.createServer(function (req,res){

    if(req.url="/"){
     let search=fs.readFileSync("index.html");
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(search);
            res.end();
    }
});
server.listen(5050);
console.log("The server is Run");

//File Write
var fs=require("fs");
var http=require("http");
var server= http.createServer(function (req,res) {

    if (req.url = "/") {
        fs.writeFile("Demo.txt","Hello World", function (error) {
            if (error) {
                res.writeHead(200, {"Content-Type": "text/html"});
                res.write("Fail");
                res.end();
            } else {
                res.writeHead(200, {"Content-Type": "text/html"});
                res.write("Success");
                res.end();
            }

        });
    }
})
server.listen(5050);
console.log("The server is Run");


//File Write Synk
var fs=require("fs");
var http=require("http");
var server= http.createServer(function (req,res) {

    if (req.url = "/") {
      let error= fs.writeFileSync("DemoSync.txt","Hello World Sync",);
            if (error) {
                res.writeHead(200, {"Content-Type": "text/html"});
                res.write("Fail");
                res.end();
            } else {
                res.writeHead(200, {"Content-Type": "text/html"});
                res.write("Success");
                res.end();
            }

    }
})
server.listen(5050);
console.log("The server is Run");

//File ReName Synk
var fs=require("fs");
var http=require("http");
var server= http.createServer(function (req,res) {

    if (req.url = "/") {
 let error= fs.renameSync("DemoSynk.txt","DemoSync12045733333.txt")
        if (error) {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write("Rename Fail");
            res.end();
        } else {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write("Rename Success");
            res.end();
        }
    }
})
server.listen(5050);
console.log("The server is Run");
//File Delete
var fs=require("fs");
var http=require("http");
var server= http.createServer(function (req,res) {

    if (req.url = "/") {
        let error= fs.unlink("Demo.txt",function (error){
        if (error) {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write("Rename Fail");
            res.end();
        } else {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write("Rename Success");
            res.end();
        }
        })
    }
})
server.listen(5050);
console.log("The server is Run");

//File DeleteSync
var fs=require("fs");
var http=require("http");
var server= http.createServer(function (req,res) {

    if (req.url = "/") {
        let error= fs.unlinkSync("DemoSync12045733333.txt")
            if (error) {
                res.writeHead(200, {"Content-Type": "text/html"});
                res.write("Rename Fail2");
                res.end();
            } else {
                res.writeHead(200, {"Content-Type": "text/html"});
                res.write("Rename Success2");
                res.end();
            }

    }
})
server.listen(5050);
console.log("The server is Run");

var server= http.createServer(function (req,res) {
    if (req.url = "/") {
        let error=fs.existsSync("DemoSync.txt")
if(error){
    res.end("true");
    }
else{
    res.end("false");
}

    }
})
server.listen(5050);
console.log("The server is Run");



var mongoClient=require('mongodb').mongoClient;
 //let URL="mongodb+srv://FarukHossen:o728mJbWd8WvXC0t@cluster0.iro3liu.mongodb.net/MongoConnect?retryWrites=true&w=majority";
var URL="mongodb://127.0.0.1:27017";
var options= user=" ",pass=" ";
mongoClient.connect(URL,options, (error,data)=>{
    if(error){
        console.log("Run  Fail")
    }
    else{
        console.log("data")
    }
});




module.exports.get=function(){
    return state.db
}
